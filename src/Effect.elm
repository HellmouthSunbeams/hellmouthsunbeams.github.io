module Effect exposing (..)

import Browser
import Browser.Navigation as Nav
import Env exposing (Env)
import Json.Decode as Decode
import Route exposing (Route)
import Url exposing (Url)


type Effect msg
    = None
    | Batch (List (Effect msg))
      -- Navigation
    | ReplaceUrl Route
    | PushUrl Url
    | LoadUrl String


type alias Model r =
    { r
        | env : Env
    }


perform : (String -> msg) -> ( Model r, Effect msg ) -> ( Model r, Cmd msg )
perform ignore ( model, effect ) =
    case effect of
        None ->
            ( model, Cmd.none )

        Batch effects ->
            List.foldl (batchEffect ignore) ( model, [] ) effects
                |> Tuple.mapSecond Cmd.batch

        -- NAVIGATION
        ReplaceUrl route ->
            ( model, Route.replaceUrl (Env.navKey model.env) route )

        PushUrl url ->
            ( model, Nav.pushUrl (Env.navKey model.env) (Url.toString url) )

        LoadUrl href ->
            ( model, Nav.load href )


batchEffect : (String -> msg) -> Effect msg -> ( Model r, List (Cmd msg) ) -> ( Model r, List (Cmd msg) )
batchEffect ignore effect ( model, cmds ) =
    perform ignore ( model, effect )
        |> Tuple.mapSecond (\cmd -> cmd :: cmds)



-- EFFECTS


{-| No effect.
-}
none : Effect msg
none =
    None


{-| Transform the messages produced by an effect.
-}
map : (a -> msg) -> Effect a -> Effect msg
map changeMsg effect =
    case effect of
        None ->
            None

        Batch effects ->
            Batch (List.map (map changeMsg) effects)

        ReplaceUrl route ->
            ReplaceUrl route

        PushUrl url ->
            PushUrl url

        LoadUrl href ->
            LoadUrl href


{-| Batch several effects together.
-}
batch : List (Effect msg) -> Effect msg
batch =
    Batch



-- NAVIGATION


{-| Replace the current URL without adding an entry to the browser history.
-}
replaceUrl : Route -> Effect msg
replaceUrl =
    ReplaceUrl


{-| Change the URL and add a new entry to the browser history.
-}
pushUrl : Url -> Effect msg
pushUrl =
    PushUrl


{-| Leave the current page and load the given URL.
-}
loadUrl : String -> Effect msg
loadUrl href =
    LoadUrl href


{-| A custom application that will turn `init` and `update` effects into
actual `Cmd` and state changes.

The additional `ignore` function is used to ignore events at a single place
in the whole application. Compared to the commonly used `NoOp`, it takes an
additional `String` description to be more informative in the debugger.

-}
application :
    { init : Url -> Nav.Key -> ( Model r, Effect msg )
    , view : Model r -> Browser.Document msg
    , update : msg -> Model r -> ( Model r, Effect msg )
    , ignore : String -> msg
    , subscriptions : Model r -> Sub msg
    , onUrlChange : Url -> msg
    , onUrlRequest : Browser.UrlRequest -> msg
    }
    -> Program Decode.Value (Model r) msg
application config =
    let
        init maybeSession =
            config.init
    in
    Browser.application
        { init = \flags url key -> init flags url key |> perform config.ignore
        , view = config.view
        , update = \msg model -> config.update msg model |> perform config.ignore
        , subscriptions = config.subscriptions
        , onUrlChange = config.onUrlChange
        , onUrlRequest = config.onUrlRequest
        }
