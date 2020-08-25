module Env exposing
    ( Env
    , init
    , navKey
    )

{-| The application environment.

@docs Env


# Create

@docs init


# Query

@docs navKey, timeZone


# Update

@docs updateTimeZone

-}

import Browser.Navigation as Nav


{-| The application environment.
-}
type Env
    = Env
        { navKey : Nav.Key
        }


{-| -}
init : Nav.Key -> Env
init key =
    Env
        { navKey = key
        }


{-| -}
navKey : Env -> Nav.Key
navKey (Env env) =
    env.navKey
