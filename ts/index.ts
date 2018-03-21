export interface ComponentData<COMP> {
    api_code_description: string;
    api_code: number;  
    result: COMP;
}

export type StateCode = ('AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'GU' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY');

// property level
export namespace PropertyLevel {
    export type Component
    = "property/census"
    | "property/details"
    | "property/details_enhanced"
    | "property/flood"
    | "property/listing_status"
    | "property/ltv_details"
    | "property/ltv_origination"
    | "property/mortgage_lien"
    | "property/mortgage_lien_all"
    | "property/nod"
    | "property/on_market"
    | "property/owner_occupied"
    | "property/rental_listing_status"
    | "property/rental_on_market"
    | "property/rental_value"
    | "property/rental_value_within_block"
    | "property/rental_yield"
    | "property/sales_history"
    | "property/school"
    | "property/value"
    | "property/value_by_quality"
    | "property/value_details_adjusted"
    | "property/value_forecast"
    | "property/value_hpi_adjusted"
    | "property/value_within_block"
    ;

    export interface RequestItem {
        address?: string;
        unit?: string;
        state?: StateCode;
        city?: string;
        zipcode?: string;
        slug?: string;
    }

    export type GeoPrecision
    = "rooftop"
    | "zip9"
    | "zip5"
    | "unknown"
    ;

    export type FloodZoneCode
    = "A"
    | "A1"
    | "A10"
    | "A11"
    | "A12"
    | "A13"
    | "A14"
    | "A15"
    | "A16"
    | "A17"
    | "A18"
    | "A19"
    | "A2"
    | "A20"
    | "A21"
    | "A22"
    | "A23"
    | "A24"
    | "A25"
    | "A26"
    | "A27"
    | "A28"
    | "A29"
    | "A3"
    | "A30"
    | "A4"
    | "A5"
    | "A6"
    | "A7"
    | "A8"
    | "A9"
    | "A99"
    | "AE"
    | "AH"
    | "AO"
    | "AR"
    | "B"
    | "C"
    | "D"
    | "V"
    | "V1"
    | "V10"
    | "V11"
    | "V12"
    | "V13"
    | "V14"
    | "V15"
    | "V16"
    | "V17"
    | "V18"
    | "V19"
    | "V2"
    | "V20"
    | "V21"
    | "V22"
    | "V23"
    | "V24"
    | "V25"
    | "V26"
    | "V27"
    | "V28"
    | "V29"
    | "V3"
    | "V30"
    | "V4"
    | "V5"
    | "V6"
    | "V7"
    | "V8"
    | "V9"
    | "VE"
    | "X"
    ;

    export type LTVOriginationSourceType
    = "deed"
    | "mls"
    | "avm_block"
    | "avm_blockgroup"
    | "avm_zip"
    | "avm_msa"
    | "avm_state"
    ;

    export type ListingStatusType
    = "Coming Soon"
    | "Active"
    | "Closed"
    | "Sold"
    | "Pending"
    | "Contingent"
    | "Cancelled"
    | "Expired"
    | "Withdrawn"
    | "Deleted"
    | "Leased"
    ;

    export type LienType
    = "arm"
    | "commercial"
    | "construction"
    | "conventional"
    | "fannie_mae_freddie_mac"
    | "farmers_home_administration"
    | "fha"
    | "land_contract"
    | "open_end"
    | "revolving_credit_line"
    | "second_to_cover_down_payment"
    | "seller_take_back"
    | "stand_alone_first"
    | "stand_alone_refi"
    | "stand_alone_second"
    | "state_veterans"
    | "usda"
    | "va"
    ;

    export type LenderType
    = "bank"
    | "credit_union"
    | "finance_company"
    | "government"
    | "individual_private_party"
    | "insurance"
    | "internet"
    | "lending_institution"
    | "mortgage_company"
    | "other_company"
    | "reo_foreclosure_company"
    | "seller"
    | "subprime_lender"
    ;

    export type ARMIndex
    = "cd_6m"
    | "cofi"
    | "libor_1m"
    | "libor_1y"
    | "libor_2m"
    | "libor_3m"
    | "libor_6m"
    | "mta_12m"
    | "prime"
    | "tbill_10y"
    | "tbill_1y"
    | "tbill_3y"
    | "tbill_5y"
    | "tbill_6m"
    ;

    export type PropertyType
    = "SFD" // single-family dwelling
    | "TH"  // townhome
    | "CND" // condo
    | "INC"
    | "MFH" // multi-family home
    ;

    export type LeasePaymentFrequency
    = "Yearly"
    | "Semi-Annually"
    | "Monthly"
    | "Quarterly"
    | "Weekly"
    | "Daily"
    ;

    export type EducationLevel
    = "elementary"
    | "middle"
    | "high"
    ;

    export interface AddressInfoStatus {
        requested_item?: RequestItem;
        errors?: string[];
        changes?: string[];
        details?: string[];
        match?: boolean;
    }

    export interface AddressInfo {
        address_full?: string;
        slug?: string;
        address?: string;
        unit?: string;
        city?: string;
        state?: StateCode;
        zipcode?: string;
        zipcode_plus4?: string;
        block_id?: string
        blockgroup_id?: string;
        county_fips?: string;
        msa?: string;
        metrodiv?: string;
        geo_precision?: GeoPrecision;
        lat?: number;
        lng?: number;
        status?: AddressInfoStatus;
    }

    export interface Census {
        msa_name?: string;
        tribal_land?: boolean;
        block?: string;
        block_group?: string;
        tract?: string;
        county_name?: string;
        fips?: string;
        msa?: string;
    }

    export interface DetailsProperty {
        // TODO:
    }

    export interface DetailsAssessment {
        apn?: string;
        assessment_year?: number;
        tax_year?: number;
        total_assessed_value?: number;
        tax_amount?: number;
    }

    export interface Details {
        property?: DetailsProperty;
        assessment?: DetailsAssessment;
    }

    export interface DetailsEnhanced {
        // TODO:
    }

    export interface Flood {
        effective_date?: string;
        flood_risk?: string;
        zone?: FloodZoneCode;
        panel_number?: string;
    }

    export interface ListingStatus {
        listing_price?: number;
        has_price_considerations?: string;
        listing_status?: string;
        listing_date?: string;
    }

    export interface Lien {
        arm_change_date?: string;
        arm_index?: ARMIndex;
        due_date?: string;
        grantee_1?: string;
        grantee_1_forenames?: string;
        grantee_2?: string;
        grantee_2_forenames?: string;
        grantor_1?: string;
        grantor_2?: string;
        heloc?: boolean;
        interest_rate?: number;
        is_arm?: boolean;
        lender_type?: LenderType;
        lien_amount?: number;
        lien_length_months?: number;
        lien_months_completed_as_of_date?: number;
        lien_type?: LienType,
        monthly_payment?: number;
        notice_ids?: number[];
        outstanding_principal?: number;
        principal_paid_as_of_date?: number;
        record_date?: string;
        stand_alone_refi?: boolean;
    }

    export interface LTVDetails {
        as_of_month?: string;
        current_liens?: Lien[];
        fsd?: number;
        in_default?: boolean;
        last_default_date?: string;
        ltv_lwr?: number;
        ltv_mean?: number;
        ltv_upr?: number;
        property_value_lwr?: number;
        property_value_mean?: number;
        property_value_upr?: number;
        total_equity_lwr?: number;
        total_equity_mean?: number;
        total_equity_upr?: number;
        total_lien?: number;
        total_monthly_payments?: number;
        total_notice_ids?: number[];
    }

    export interface LTVOrigination {
        ltv?: number;
        lien?: number;
        value?: number;
        source?: LTVOriginationSourceType;
    }

    export interface MortgageLienItem {
        due_date?: string;
        event_type?: string;
        mortgage_years?: number;
        grantee_1?: string;
        grantee_1_forenames?: string;
        grantee_2?: string;
        grantee_2_forenames?: string;
        grantor_2?: string;
        record_page?: number;
        fifteen_yr?: number;
        amount?: number;
        apn?: string;
        record_date?: string;
        thirty_yr?: number;
        fips?: string;
        record_doc?: string;
        grantor_1?: string;
        interest_rate?: number;
        record_book?: number;
        hc_interest_rate?: number;
        arm_index?: ARMIndex;
        heloc?: boolean;
        lien_type?: LienType;
        lender_type?: LenderType;
        stand_alone_refi?: boolean;
    }

    export type MortgageLien = MortgageLienItem[];
    export type MortgageLienAll = MortgageLienItem[];

    export interface NodItem {
        // TODO:
    }

    export type Nod = NodItem[];

    export interface OnMarket {
        currently_listed?: boolean;
        listing_price?: number;
        listing_date?: string;
        has_price_considerations?: string;
    }

    export interface OwnerOccupied {
        owner_occupied?: boolean;
    }

    export interface RentalListingStatus {
        listing_price?: number;
        has_price_considerations?: string;
        listing_status?: ListingStatusType,
        lease_payment_frequency?: string;
        listing_date?: string;
    }

    export interface RentalOnMarket {
        currently_listed?: boolean;
        listing_date?: string;
        listing_price?: number,
        lease_payment_frequency?: LeasePaymentFrequency,
        has_price_considerations?: string;
    }

    export interface RentalValue {
        price_upr?: number;
        price_lwr?: number;
        price_mean?: number;
        fsd?: number;
    }

    export interface ValueRange {
        name: string;
        low?: number;
        high?: number;
    }

    export interface ValueWithinBlock {
        property_type?: PropertyType;
        housecanary_value_percentile_range?: ValueRange;
        housecanary_value_sqft_percentile_range?: ValueRange;
        client_value_percentile_range?: ValueRange;
        client_value_sqft_percentile_range?: ValueRange;
    }

    export type RentalValueWithinBlock = ValueWithinBlock;

    export interface RentalYield {
        gross_yield?: number;
        value?: number;
        monthly_rent?: number;
    }

    export interface SalesHistoryItem {
        // TODO:
    }
    export type SalesHistory = SalesHistoryItem[];

    export interface School {
        city?: string;
        verified_school_boundaries?: boolean;
        distance_miles?: number;
        name?: string;
        zipcode?: string;
        phone?: string;
        state?: StateCode;
        score?: number,
        education_level?: EducationLevel[];
        address?: string;
        assessment_year?: number;
    }

    export interface Value {
        price_upr?: number;
        price_lwr?: number;
        price_mean?: number;
        fsd?: number;
    }

    export interface ValueByQuality {
        // TODO:
    }

    export interface ValueDetailsAdjusted {
        // TODO:
    }

    export interface ValueForecast { 
        month_03?: {value: number};
        month_06?: {value: number};
        month_12?: {value: number};
        month_18?: {value: number};
        month_24?: {value: number};
        month_30?: {value: number};
        month_36?: {value: number};
    }

    export interface ValueHPIAdjusted {
        // TODO:
    }

    export interface MGetItem {
        address_info: AddressInfo;
        "property/geocode"?: ComponentData<boolean>;
        "property/census"?: ComponentData<Census>;
        "property/details"?: ComponentData<Details>;
        "property/details_enhanced"?: ComponentData<DetailsEnhanced>;
        "property/flood"?: ComponentData<Flood>;
        "property/listing_status"?: ComponentData<ListingStatus>;
        "property/ltv_details"?: ComponentData<LTVDetails>;
        "property/ltv_origination"?: ComponentData<LTVOrigination>;
        "property/mortgage_lien"?: ComponentData<MortgageLien>;
        "property/mortgage_lien_all"?: ComponentData<MortgageLienAll>;
        "property/nod"?: ComponentData<Nod>;
        "property/on_market"?: ComponentData<OnMarket>;
        "property/owner_occupied"?: ComponentData<OwnerOccupied>;
        "property/rental_listing_status"?: ComponentData<RentalListingStatus>;
        "property/rental_on_market"?: ComponentData<RentalOnMarket>;
        "property/rental_value"?: ComponentData<RentalValue>;
        "property/rental_value_within_block"?: ComponentData<RentalValueWithinBlock>;
        "property/rental_yield"?: ComponentData<RentalYield>;
        "property/sales_history"?: ComponentData<SalesHistory>;
        "property/school"?: ComponentData<School>;
        "property/value"?: ComponentData<Value>;
        "property/value_by_quality"?: ComponentData<ValueByQuality>;
        "property/value_details_adjusted"?: ComponentData<ValueDetailsAdjusted>;
        "property/value_forecast"?: ComponentData<ValueForecast>;
        "property/value_hpi_adjusted"?: ComponentData<ValueHPIAdjusted>;
        "property/value_within_block"?: ComponentData<ValueWithinBlock>;
    }

    export type MGetReturn = MGetItem[]; 
}

// block level
export namespace BlockLevel {
    export interface RequestItem {
        block_id?: string;
    }
    // TODO:
}

// blockgroup level
export namespace BlockGroupLevel {
    export interface RequestItem {
        blockgroup_id?: string;
    }
    // TODO:
}

// zip level
export namespace ZipLevel {
    export interface RequestItem {
        zipcode?: string;
    }
    // TODO:
}

// metrodiv level
export namespace MetroDivLevel {
    export interface RequestItem {
        metrodiv?: string;
    }
    // TODO:
}

// msa level
export namespace MSALevel {
    export interface RequestItem {
        msa?: string;
    }
    // TODO:
}

// state level
export namespace StateLevel {
    export interface RequestItem {
        state?: StateCode;
    }
    // TODO:
}