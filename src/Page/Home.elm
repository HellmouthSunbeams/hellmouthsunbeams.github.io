module Page.Home exposing (..)

import Element exposing (centerX, centerY, column, el, text)


view =
    { title = ""
    , content =
        column [ centerX, centerY ]
            [ el [] (text "Welcome to the future fan page of the Hellmouth Sunbeams.")
            , el [] (text "Have YOU stared into the Sun today?")
            ]
    }
