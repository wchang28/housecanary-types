export interface ComponentData<COMP> {
    api_code_description: string;
    api_code: number;
    result: COMP;
}
export declare type StateCode = ('AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'GU' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY');
export declare namespace PropertyLevel {
    type Component = "property/census" | "property/details" | "property/details_enhanced" | "property/flood" | "property/listing_status" | "property/ltv_details" | "property/ltv_origination" | "property/mortgage_lien" | "property/mortgage_lien_all" | "property/nod" | "property/on_market" | "property/owner_occupied" | "property/rental_listing_status" | "property/rental_on_market" | "property/rental_value" | "property/rental_value_within_block" | "property/rental_yield" | "property/sales_history" | "property/school" | "property/value" | "property/value_by_quality" | "property/value_details_adjusted" | "property/value_forecast" | "property/value_hpi_adjusted" | "property/value_within_block";
    interface RequestItem {
        address?: string;
        unit?: string;
        state?: StateCode;
        city?: string;
        zipcode?: string;
        slug?: string;
    }
    type GeoPrecision = "rooftop" | "zip9" | "zip5" | "unknown";
    type FloodZoneCode = "A" | "A1" | "A10" | "A11" | "A12" | "A13" | "A14" | "A15" | "A16" | "A17" | "A18" | "A19" | "A2" | "A20" | "A21" | "A22" | "A23" | "A24" | "A25" | "A26" | "A27" | "A28" | "A29" | "A3" | "A30" | "A4" | "A5" | "A6" | "A7" | "A8" | "A9" | "A99" | "AE" | "AH" | "AO" | "AR" | "B" | "C" | "D" | "V" | "V1" | "V10" | "V11" | "V12" | "V13" | "V14" | "V15" | "V16" | "V17" | "V18" | "V19" | "V2" | "V20" | "V21" | "V22" | "V23" | "V24" | "V25" | "V26" | "V27" | "V28" | "V29" | "V3" | "V30" | "V4" | "V5" | "V6" | "V7" | "V8" | "V9" | "VE" | "X";
    type LTVOriginationSourceType = "deed" | "mls" | "avm_block" | "avm_blockgroup" | "avm_zip" | "avm_msa" | "avm_state";
    type ListingStatusType = "Coming Soon" | "Active" | "Closed" | "Sold" | "Pending" | "Contingent" | "Cancelled" | "Expired" | "Withdrawn" | "Deleted" | "Leased";
    type PropertyType = "SFD" | "TH" | "CND" | "INC" | "MFH";
    type LeasePaymentFrequency = "Yearly" | "Semi-Annually" | "Monthly" | "Quarterly" | "Weekly" | "Daily";
    type EducationLevel = "elementary" | "middle" | "high";
    interface AddressInfoStatus {
        requested_item?: RequestItem;
        errors?: string[];
        changes?: string[];
        details?: string[];
        match?: boolean;
    }
    interface AddressInfo {
        address_full?: string;
        slug?: string;
        address?: string;
        unit?: string;
        city?: string;
        state?: StateCode;
        zipcode?: string;
        zipcode_plus4?: string;
        block_id?: string;
        blockgroup_id?: string;
        county_fips?: string;
        msa?: string;
        metrodiv?: string;
        geo_precision?: GeoPrecision;
        lat?: number;
        lng?: number;
        status?: AddressInfoStatus;
    }
    interface Census {
        msa_name?: string;
        tribal_land?: boolean;
        block?: string;
        block_group?: string;
        tract?: string;
        county_name?: string;
        fips?: string;
        msa?: string;
    }
    interface DetailsProperty {
    }
    interface DetailsAssessment {
        apn?: string;
        assessment_year?: number;
        tax_year?: number;
        total_assessed_value?: number;
        tax_amount?: number;
    }
    interface Details {
        property?: DetailsProperty;
        assessment?: DetailsAssessment;
    }
    interface DetailsEnhanced {
    }
    interface Flood {
        effective_date?: string;
        flood_risk?: string;
        zone?: FloodZoneCode;
        panel_number?: string;
    }
    interface ListingStatus {
        listing_price?: number;
        has_price_considerations?: string;
        listing_status?: string;
        listing_date?: string;
    }
    interface LTVDetails {
    }
    interface LTVOrigination {
        ltv?: number;
        lien?: number;
        value?: number;
        source?: LTVOriginationSourceType;
    }
    interface MortgageLienItem {
    }
    type MortgageLien = MortgageLienItem[];
    interface MortgageLienAllItem {
    }
    type MortgageLienAll = MortgageLienAllItem[];
    interface NodItem {
    }
    type Nod = NodItem[];
    interface OnMarket {
        currently_listed?: boolean;
        listing_price?: number;
        listing_date?: string;
        has_price_considerations?: string;
    }
    interface OwnerOccupied {
        owner_occupied?: boolean;
    }
    interface RentalListingStatus {
        listing_price?: number;
        has_price_considerations?: string;
        listing_status?: ListingStatusType;
        lease_payment_frequency?: string;
        listing_date?: string;
    }
    interface RentalOnMarket {
        currently_listed?: boolean;
        listing_date?: string;
        listing_price?: number;
        lease_payment_frequency?: LeasePaymentFrequency;
        has_price_considerations?: string;
    }
    interface RentalValue {
        price_upr?: number;
        price_lwr?: number;
        price_mean?: number;
        fsd?: number;
    }
    interface ValueRange {
        name: string;
        low?: number;
        high?: number;
    }
    interface ValueWithinBlock {
        property_type?: PropertyType;
        housecanary_value_percentile_range?: ValueRange;
        housecanary_value_sqft_percentile_range?: ValueRange;
        client_value_percentile_range?: ValueRange;
        client_value_sqft_percentile_range?: ValueRange;
    }
    type RentalValueWithinBlock = ValueWithinBlock;
    interface RentalYield {
        gross_yield?: number;
        value?: number;
        monthly_rent?: number;
    }
    interface SalesHistoryItem {
    }
    type SalesHistory = SalesHistoryItem[];
    interface School {
        city?: string;
        verified_school_boundaries?: boolean;
        distance_miles?: number;
        name?: string;
        zipcode?: string;
        phone?: string;
        state?: StateCode;
        score?: number;
        education_level?: EducationLevel[];
        address?: string;
        assessment_year?: number;
    }
    interface Value {
        price_upr?: number;
        price_lwr?: number;
        price_mean?: number;
        fsd?: number;
    }
    interface ValueByQuality {
    }
    interface ValueDetailsAdjusted {
    }
    interface ValueForecast {
        month_03?: {
            value: number;
        };
        month_06?: {
            value: number;
        };
        month_12?: {
            value: number;
        };
        month_18?: {
            value: number;
        };
        month_24?: {
            value: number;
        };
        month_30?: {
            value: number;
        };
        month_36?: {
            value: number;
        };
    }
    interface ValueHPIAdjusted {
    }
    interface MGetItem {
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
    type MGetReturn = MGetItem[];
}
export declare namespace BlockLevel {
    interface RequestItem {
        block_id?: string;
    }
}
export declare namespace BlockGroupLevel {
    interface RequestItem {
        blockgroup_id?: string;
    }
}
export declare namespace ZipLevel {
    interface RequestItem {
        zipcode?: string;
    }
}
export declare namespace MetroDivLevel {
    interface RequestItem {
        metrodiv?: string;
    }
}
export declare namespace MSALevel {
    interface RequestItem {
        msa?: string;
    }
}
export declare namespace StateLevel {
    interface RequestItem {
        state?: StateCode;
    }
}
