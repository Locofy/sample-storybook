import { AppProvider } from "@shopify/polaris";
import { Select as ShopifySelect } from "@shopify/polaris";
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import React, { useCallback, useState } from "react";

export const Select = (props) => {
  const [selected, setSelected] = useState(props.options[0].label);

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  return <AppProvider i18n={enTranslations}>
    <ShopifySelect
      label="Date range"
      options={props.options}
      onChange={handleSelectChange}
      value={selected}
    />
  </AppProvider>
}