import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Provider } from "react-redux";
import store from "./store";


export default function Providers({children})
{
    /**
     * Este es el componente que se encarga de proveer los providers de la aplicación.
     * En este caso, provee el store de redux y el tema de GluestackUI.
     */
    return (
        <Provider store={store}>
            <GluestackUIProvider config={config}>
                {children}
            </GluestackUIProvider>
        </Provider>
    );
}