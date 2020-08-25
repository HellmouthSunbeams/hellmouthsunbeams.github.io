module Page exposing
    ( Msg, Page
    , blank
    , changeRouteTo
    , view, mapDocument
    , update
    )

{-| This module is responsible to handle subpages.


# Types

@docs Msg, Page


# Creation

@docs blank


# Routing

@docs changeRouteTo


# View

@docs view, mapDocument


# Update

@docs update

-}

import Browser exposing (Document)
import Effect exposing (Effect)
import Element exposing (Element)
import Env exposing (Env)
import Html exposing (Html, text)
import Page.Blank as Blank
import Page.Home as Home
import Page.NotFound as NotFound
import Route exposing (Route)


{-| An opaque type to store the subpage and its model.
-}
type Page
    = Blank
    | NotFound
    | Home


{-| An empty page.
-}
blank : Page
blank =
    Blank


{-| Transform the messages produced by the page.
-}
mapDocument : (msg1 -> msg2) -> Document msg1 -> Document msg2
mapDocument changeMsg { title, body } =
    { title = title, body = List.map (Html.map changeMsg) body }



-- VIEW


{-| Turns the page into an HTML page.
-}
view : Env -> Page -> Document Msg
view env page =
    let
        viewPage toPageMsg config =
            viewDocument page config
                |> mapDocument toPageMsg
    in
    case page of
        Blank ->
            viewDocument page Blank.view

        NotFound ->
            viewDocument page NotFound.view

        Home ->
            viewDocument page Home.view


viewDocument : Page -> { title : String, content : Element msg } -> Document msg
viewDocument page { title, content } =
    { title = title ++ " - Conduit"
    , body = [ Element.layout [] content ]
    }



-- UPDATE


{-| The subpages messages.
-}
type Msg
    = GotHomeMsg


{-| Return the page and associated effects associated to a route change.
-}
changeRouteTo : Maybe Route -> Page -> ( Page, Effect Msg )
changeRouteTo maybeRoute page =
    case maybeRoute of
        Nothing ->
            ( NotFound, Effect.none )

        Just Route.Home ->
            ( Home, Effect.none )


{-| Update the page from a message, returning an updated page and effects.
-}
update : Msg -> Page -> ( Page, Effect Msg )
update msg page =
    case ( msg, page ) of
        ( GotHomeMsg, Home ) ->
            ( Home, Effect.none )

        ( _, _ ) ->
            -- Disregard messages that arrived for the wrong page.
            ( page, Effect.none )


updateWith :
    (pageModel -> Page)
    -> (pageMsg -> Msg)
    -> ( pageModel, Effect pageMsg )
    -> ( Page, Effect Msg )
updateWith toPage toMsg ( pageModel, effect ) =
    ( toPage pageModel
    , Effect.map toMsg effect
    )
