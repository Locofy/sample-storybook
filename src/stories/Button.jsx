import { AppProvider } from "@shopify/polaris";
import { Button as ShopifyButton } from "@shopify/polaris";
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import React from "react";

export const Button = (props) => {
  return <AppProvider i18n={enTranslations}>
    <ShopifyButton {...props}>{props?.label}</ShopifyButton>
  </AppProvider>
}