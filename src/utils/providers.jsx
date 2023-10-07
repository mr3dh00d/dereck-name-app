import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Provider } from "react-redux";
import store from "./store";


export default function Providers({children})
{
    return (
        <Provider store={store}>
            <GluestackUIProvider config={config}>
                {children}
            </GluestackUIProvider>
        </Provider>
    );
}