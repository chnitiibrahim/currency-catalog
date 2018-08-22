export class Currency {
  constructor(public code: string,
              public name: string,
              public currency_type: string,
              public code_iso_numeric3: number,
              public code_iso_alpha3: number,
              public code_estandards_alpha: string,
              public code_jsons_alpha: string,
              public symbol: string,
              public native_symbol: string,
              public exponent: number,
              public parent_currency_multiplier: number,
              public category: string,
              public created: any,
              public updated: any,
              public icon: any,
              public issuer: string) {
  }
}
