import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsContactFormBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_contact_form_blocks';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    fields: Schema.Attribute.Component<'components.form-field', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsContactInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_contact_info_blocks';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'components.contact-item', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsContactItem extends Struct.ComponentSchema {
  collectionName: 'components_components_contact_items';
  info: {
    displayName: 'ContactItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ComponentsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_cards';
  info: {
    displayName: 'Feature Card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'files' | 'images'>;
    items: Schema.Attribute.Component<'components.items', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeatureFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']
    >;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsFormField extends Struct.ComponentSchema {
  collectionName: 'components_components_form_fields';
  info: {
    displayName: 'FormField';
  };
  attributes: {
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<
      [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
        'textarea',
      ]
    >;
  };
}

export interface ComponentsHouseFeatures extends Struct.ComponentSchema {
  collectionName: 'components_components_house_features';
  info: {
    displayName: 'house-features';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Schema.Attribute.String;
  };
}

export interface ComponentsHouseTypeMainFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_components_house_type_main_features';
  info: {
    displayName: 'houseTypeMainFeatures';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ComponentsIcon extends Struct.ComponentSchema {
  collectionName: 'components_components_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsItems extends Struct.ComponentSchema {
  collectionName: 'components_components_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    itemDescription: Schema.Attribute.Text;
    itemTitle: Schema.Attribute.String;
  };
}

export interface ComponentsKepSzoeveg extends Struct.ComponentSchema {
  collectionName: 'components_components_kep_szoevegs';
  info: {
    displayName: 'K\u00E9p + Sz\u00F6veg';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
    textPosition: Schema.Attribute.Enumeration<['LEFT', 'RIGHT']>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface ComponentsMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_components_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    externalUrl: Schema.Attribute.String;
    label: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface ComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_components_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'components.feature-feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'components.link', false>;
    socialLink: Schema.Attribute.Component<'components.link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutGaleriaSzekcio extends Struct.ComponentSchema {
  collectionName: 'components_layout_galeria_szekcio';
  info: {
    displayName: 'Gal\u00E9ria szekci\u00F3';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutGeneralkivitelezes extends Struct.ComponentSchema {
  collectionName: 'components_layout_generalkivitelezes';
  info: {
    displayName: 'Gener\u00E1lkivitelez\u00E9s';
  };
  attributes: {
    icons: Schema.Attribute.Component<'components.icon', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'components.link', false>;
    logoText: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutHeroSlider extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sliders';
  info: {
    displayName: 'Hero Slider';
  };
  attributes: {
    slides: Schema.Attribute.Component<'layout.hero-section', true>;
  };
}

export interface LayoutHomePageFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_home_page_features';
  info: {
    displayName: 'Home Page Features';
  };
  attributes: {
    features: Schema.Attribute.Component<'components.feature-card', true>;
  };
}

export interface LayoutKapcsolatSzekcio extends Struct.ComponentSchema {
  collectionName: 'components_layout_kapcsolat_szekcio';
  info: {
    displayName: 'Kapcsolat szekci\u00F3';
  };
  attributes: {
    contact: Schema.Attribute.Component<'components.contact-info-block', false>;
    form: Schema.Attribute.Component<'components.contact-form-block', false>;
  };
}

export interface LayoutMiertVeluenkEpitsen extends Struct.ComponentSchema {
  collectionName: 'components_layout_miert_veluenk_epitsens';
  info: {
    displayName: 'Mi\u00E9rt vel\u00FCnk \u00E9p\u00EDtsen';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'components.items', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    blocks: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    slides: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.contact-form-block': ComponentsContactFormBlock;
      'components.contact-info-block': ComponentsContactInfoBlock;
      'components.contact-item': ComponentsContactItem;
      'components.feature-card': ComponentsFeatureCard;
      'components.feature-feature': ComponentsFeatureFeature;
      'components.form-field': ComponentsFormField;
      'components.house-features': ComponentsHouseFeatures;
      'components.house-type-main-features': ComponentsHouseTypeMainFeatures;
      'components.icon': ComponentsIcon;
      'components.items': ComponentsItems;
      'components.kep-szoeveg': ComponentsKepSzoeveg;
      'components.link': ComponentsLink;
      'components.menu-item': ComponentsMenuItem;
      'components.seo': ComponentsSeo;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.galeria-szekcio': LayoutGaleriaSzekcio;
      'layout.generalkivitelezes': LayoutGeneralkivitelezes;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.hero-slider': LayoutHeroSlider;
      'layout.home-page-features': LayoutHomePageFeatures;
      'layout.kapcsolat-szekcio': LayoutKapcsolatSzekcio;
      'layout.miert-veluenk-epitsen': LayoutMiertVeluenkEpitsen;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
