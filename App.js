import Providers from "./src/utils/providers";
import App from "./src/app";
import { SafeAreaView } from "react-native";

export default () => {
  return (
    <SafeAreaView style={{flex: 1}} forceInset={{ top: 'never' }}>
      <Providers>
        <App/>
      </Providers>
    </SafeAreaView>
  );
}