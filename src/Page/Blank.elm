module Page.Blank exposing (view)

import Element exposing (Element, el, text)


view : { title : String, content : Element msg }
view =
    { title = ""
    , content = el [] <| text "You shouldn't be here"
    }
