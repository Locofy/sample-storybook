import { AppProvider } from "@shopify/polaris";
import { Checkbox as ShopifyCheckbox } from "@shopify/polaris";
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import React from "react";

export const Checkbox = (props) => {
  return <AppProvider i18n={enTranslations}>
    <ShopifyCheckbox {...props}>{props?.label}</ShopifyCheckbox>
  </AppProvider>
}