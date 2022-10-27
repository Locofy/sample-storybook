import { AppProvider } from "@shopify/polaris";
import { RadioButton as ShopifyRadio } from "@shopify/polaris";
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import React from "react";

export const Radio = (props) => {
  return <AppProvider i18n={enTranslations}>
    <ShopifyRadio {...props}>{props?.label}</ShopifyRadio>
  </AppProvider>
}