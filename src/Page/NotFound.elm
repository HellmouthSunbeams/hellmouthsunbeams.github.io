module Page.NotFound exposing (view)

{-| Not Found page.

@docs view

-}

import Element exposing (Element, centerY, el, text)



-- VIEW


{-| -}
view : { title : String, content : Element msg }
view =
    { title = "Page Not Found"
    , content =
        el [ centerY ] <| text "You seem to have stumbled down an alley you shouldn't have friend"
    }
