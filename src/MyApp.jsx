import { MantineProvider } from "@mantine/core"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"
import { store } from "./store"

export const MyApp = () => {
  return (
    <MantineProvider theme={{ colorScheme: 'dark', primaryColor: "violet" }} withGlobalStyles withNormalizeCSS>
      <Provider store={ store } >
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  )
}
