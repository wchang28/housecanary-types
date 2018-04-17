export type StateCode = ('AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'GU' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY');

export type YesOrNo = ("yes" | "no");

export type PropertyTypeCode
= "SFD" // Single Family Dwelling
| "TH"  // Townhouse
| "CND" // Condominium
| "INC" // Multi-Family Building
| "MFH" // Manufactured/Mobile Home
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

export interface GrossYield {
    gross_yield_count?: number;
    gross_yield_average?: number;
    gross_yield_median?: number;
}

export interface PropertyGrossYield extends GrossYield  {
    property_type?: PropertyTypeCode;
    gross_yield_count?: number;
    gross_yield_average?: number;
    gross_yield_median?: number;
}

export interface ValueDistributionByProperty {
    property_type?: PropertyTypeCode;

    value_5?: number;
    value_25?: number;
    value_50?: number;
    value_75?: number;
    value_95?: number;
    value_min?: number;
    value_max?: number;
    value_mean?: number;
    value_sd?: number;
    value_count?: number;

    value_sqft_5?: number;
    value_sqft_25?: number;
    value_sqft_50?: number;
    value_sqft_75?: number;
    value_sqft_95?: number;
    value_sqft_min?: number;
    value_sqft_max?: number;
    value_sqft_mean?: number;
    value_sqft_sd?: number;
    value_sqft_count?: number;
}

export interface TimeSeries<TSI> {
    time_series: TSI[];
}

export interface PropertyValueTimesSeriesItem {
    month?: string; // yyyy-mm-01
    value_median?: number;
    value_sqft_median?: number;    
}

export interface PropertyValueTimeSeries extends TimeSeries<PropertyValueTimesSeriesItem> {
    property_type?: PropertyTypeCode;
}

export interface AffordabilityTimesSeriesItem {
    month?: string; // yyyy-mm-01
    afford_pmt?: number;
    afford_detrended?: number;
}

export type AffordabilityTimesSeries = TimeSeries<AffordabilityTimesSeriesItem>;

export interface HPITimesSeriesItem {
    month?: string;  // yyyy-mm-01
    hpi_value?: number;
    hpi_real?: number;
    hpi_trend?: number;
    hpi_distance?: number;
}

export type HPITimesSeries = TimeSeries<HPITimesSeriesItem>;

export interface ComponentData<COMP> {
    api_code_description: string;
    api_code: number;  
    result: COMP;
}

export type MGetResponse<LI> = LI[];

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
        components?: string;
    }

    export type GeoPrecision
    = "rooftop"
    | "zip9"
    | "zip5"
    | "unknown"
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

    export type AirConditioningType
    = "central"
    | "evaporative_cooler"
    | "none"
    | "other"
    | "packaged_unit"
    | "partial"
    | "refrigeration"
    | "window_unit"
    | "yes"
    ;

    export type BasementType
    = "basement_not_specified"
    | "daylight_full"
    | "daylight_partial"
    | "full_basement"
    | "improved_basement_finished"
    | "no_basement"
    | "partial_basement"
    | "unfinished_basement"
    ;

    export type BuildingConditionScore
    = 1     // Unsound
    | 2     // Poor
    | 3     // Fair
    | 4     // Good
    | 5     // Excellent
    ;

    export type BuildingQualityScore
    = 1     // E grade
    | 2     // D grade
    | 3     // C grade
    | 4     // B grade
    | 5     // A grade
    ;

    export type ConstructionType
    = "Adobe"
    | "Brick"
    | "Concrete"
    | "Concrete Block"
    | "Dome"
    | "Frame"
    | "Heavy"
    | "Light"
    | "Log"
    | "Manufactured"
    | "Masonry"
    | "Metal"
    | "Mixed"
    | "Other"
    | "Steel"
    | "Stone"
    | "Tilt-up (pre-cast concrete)"
    | "Wood"
    ;

    export type ExteriorWallsType
    = "asbestos_shingle"
    | "block"
    | "brick"
    | "brick_veneer"
    | "combination"
    | "composition"
    | "concrete"
    | "concrete_block"
    | "log"
    | "masonry"
    | "metal"
    | "other"
    | "rock_stone"
    | "shingle_not_wood"
    | "siding_alum_vinyl"
    | "stucco"
    | "tile"
    | "tilt_up_pre_cast_concrete"
    | "wood"
    | "wood_shingle"
    | "wood_siding"
    ;

    export type GarageTypeParking
    = "attached_garage"
    | "built_in"
    | "carport"
    | "covered"
    | "detached_garage"
    | "garage"
    | "mixed"
    | "none"
    | "open"
    | "parking_lot"
    | "parking_structure"
    | "pole"
    | "tuckunder"
    | "underground_basement"
    | "yes"
    ;

    export type HeatingType
    = "baseboard"
    | "central"
    | "electric"
    | "floor_wall"
    | "forced_air_unit"
    | "gas"
    | "gravity"
    | "heat_pump"
    | "hot_water"
    | "none"
    | "oil"
    | "other"
    | "propane"
    | "radiant"
    | "solar"
    | "space_suspended"
    | "steam"
    | "vent"
    | "wood_burning"
    | "yes"
    | "zone"
    ;

    export type HeatingFuelType
    = "electric"
    | "gas"
    | "geo_thermal"
    | "none"
    | "oil"
    | "propane"
    | "solar"
    | "wood"
    ; 

    export type RoofCoverType
    = "Aluminum"
    | "Asbestos"
    | "Asphalt"
    | "Bermuda"
    | "Built-up"
    | "Composition Shingle"
    | "Concrete"
    | "Fiberglass"
    | "Gravel/Rock"
    | "Metal"
    | "Other"
    | "Roll Composition"
    | "Shingle (Not Wood)"
    | "Slate"
    | "Steel"
    | "Tar & Gravel"
    | "Tile"
    | "Urethane"
    | "Wood"
    | "Wood Shake/Shingles"
    ;
    
    export type RoofType
    = "Flat"
    | "Gable"
    | "Gable or hip"
    | "Gambrel"
    | "Hip"
    | "Irregular/cathedral"
    | "Mansard"
    | "Rigid frame bar joint"
    | "Shed"
    | "Wood truss"
    ;

    export type SewerType
    = "municipal"
    | "none"
    | "septic"
    | "storm"
    | "yes"
    ;

    export type PropertyStyle
    = "a_frame"
    | "bungalow"
    | "cape_cod"
    | "colonial"
    | "contemporary"
    | "conventional"
    | "cottage"
    | "custom"
    | "dome"
    | "english"
    | "french_provincial"
    | "georgian"
    | "historical"
    | "high_rise"
    | "log_cabin_rustic"
    | "mansion"
    | "mediterranean"
    | "modern"
    | "modular"
    | "other"
    | "prefab_modular"
    | "ranch_rambler"
    | "raised_ranch"
    | "spanish"
    | "traditional"
    | "tudor"
    | "unfinished_under_construction"
    | "victorian"
    ;

    export type WaterConnectionType
    = "cistern"
    | "municipal"
    | "none"
    | "spring"
    | "well"
    | "yes"
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
    | "Not Listed"
    ;
    
    export type RentalListingStatusType
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
    = "Single Family Residential"
    | "Townhouse"
    | "Condominium"
    | "Manufactured/Mobile Home"
    | "Multi-Family"
    | "Land"
    | "Timeshare"
    | "Commercial"
    | "Other"
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

    export interface Address {
        address_full?: string;  // Full address string
        address?: string;       // Street address
        unit?: string;          // Unit within the building, if any
        city?: string;          // City where property is located
        state?: StateCode;      // 2-character US state abbreviation
        zipcode?: string;       // 5-character US zipcode
        zipcode_plus4?: string; // 4-character zipcode extension
    }

    export interface GeoLocation {
        lat?: number;   // Latitude value, in degrees
        lng?: number;   // Longitude value, in degrees
    }

    export interface GeoLocationWithPrecision extends GeoLocation {
        geo_precision?: GeoPrecision;   // a string describing available geo precision
    }

    export interface CensusForeignKeys {
        block_id?: string;      // 15-digit US census block ID
        blockgroup_id?: string; // 12-digit census block group ID
        msa?: string;           // 5-digit US census MSA ID
        metrodiv?: string;      // 5-digit US census Metropolitan Division ID     
        county_fips?: string;   // 5-digit US census county ID
    }

    export interface AddressData extends Address, CensusForeignKeys, GeoLocationWithPrecision {
        slug?: string;  // HouseCanary address slug. A single URL-safe string identifying the address
    }

    export interface AddressInfoStatus {
        requested_item?: RequestItem;
        errors?: string[];
        changes?: string[];
        details?: string[];
        match?: boolean;
    }

    export interface AddressInfo extends AddressData {
        status?: AddressInfoStatus;
    }

    // property/census
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
        air_conditioning?: AirConditioningType;
        attic?: boolean;
        basement?: BasementType;
        building_area_sq_ft?: number;
        building_condition_score?: BuildingConditionScore;
        building_quality_score?: BuildingQualityScore;
        construction_type?: ConstructionType;
        exterior_walls?: ExteriorWallsType;
        fireplace?: boolean;
        full_bath_count?: number;
        garage_parking_of_cars?: number;
        garage_type_parking?: GarageTypeParking;
        heating?: HeatingType;
        heating_fuel_type?: HeatingFuelType;
        no_of_buildings?: number;
        no_of_stories?: number;
        number_of_bedrooms?: number;
        number_of_units?: number;
        partial_bath_count?: number;    // can be float
        pool?: boolean;
        property_type?: PropertyType;
        roof_cover?: RoofCoverType;
        roof_type?: RoofType;
        sewer?: SewerType;
        site_area_acres?: number;
        style?: PropertyStyle;
        total_bath_count?: number;  // can be float
        total_number_of_rooms?: number;
        subdivision?: string;   // Subdivision as reported to the assessor
        water?: WaterConnectionType;
        year_built?: number;
        zoning?: string;        // County-specific property zoning
    }

    export interface DetailsAssessment {
        apn?: string;
        assessment_year?: number;
        owner_name?: string;
        tax_year?: number;
        total_assessed_value?: number;
        tax_amount?: number;
    }

    // property/details
    export interface Details {
        property?: DetailsProperty;
        assessment?: DetailsAssessment;
    }

    export interface SalesInfo {
        list_price?: number;
        list_date?: string;
        sale_date?: string;
        sale_price?: number;
        is_reo?: boolean;
        is_distressed?: boolean;
    }

    export interface DetailsEnhancedRecord {
        building_area_sq_ft?: number;
        has_basement?: boolean;
        has_pool?: boolean;
        number_of_bathrooms?: number;   // can be float
        number_of_bedrooms?: number;
        parking_carport_count?: number;
        parking_driveway_count?: number;
        parking_garage_count?: number;
        property_type?: PropertyType;
        site_area_acres?: number;
        stories_count?: number;
        year_built?: number;

        assessment?: DetailsAssessment;
        sale?: SalesInfo;
    }

    // property/details_enhanced
    export interface DetailsEnhanced {
        public_record?: DetailsEnhancedRecord;
        listing_record?: DetailsEnhancedRecord;
    }

    // property/flood
    export interface Flood {
        effective_date?: string;
        flood_risk?: string;
        zone?: FloodZoneCode;
        panel_number?: string;
    }

    // property/listing_status
    export interface ListingStatus {
        listing_date?: string;
        listing_price?: number;
        has_price_considerations?: string;

        listing_status?: ListingStatusType;
    }

    export interface DebtOligationParties {
        grantee_1?: string;
        grantee_1_forenames?: string;
        grantee_2?: string;
        grantee_2_forenames?: string;
        grantor_1?: string;
        grantor_1_forenames?: string;
        grantor_2?: string;
        grantor_2_forenames?: string;
    }
    
    export interface LienInfoBase {
        due_date?: string;
        interest_rate?: number;
        heloc?: boolean;
        arm_index?: ARMIndex;
        lender_type?: LenderType;
        lien_type?: LienType;
        stand_alone_refi?: boolean;
    }

    export interface Lien extends LienInfoBase, DebtOligationParties {
        arm_change_date?: string;
        is_arm?: boolean;
        lien_amount?: number;
        lien_length_months?: number;
        lien_months_completed_as_of_date?: number;
        monthly_payment?: number;
        notice_ids?: number[];
        outstanding_principal?: number;
        principal_paid_as_of_date?: number;
        record_date?: string;
    }

    // property/ltv_details
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

    // property/ltv_origination
    export interface LTVOrigination {
        ltv?: number;
        lien?: number;
        value?: number;
        source?: LTVOriginationSourceType;
    }

    export interface CountyRecorderRecord {
        apn?: string;
        fips?: string;
        event_type?: string; // "lien_concurrent_1" | "lien_concurrent_2" | "lien_stand_alone" | "default_notice" | "arms_length_sale" | "sale_other" | ...
        record_date?: string;
        record_doc?: string;
        record_book?: number;
        record_page?: number;
    }

    export interface MortgageLienItem extends LienInfoBase, DebtOligationParties, CountyRecorderRecord {
        mortgage_years?: number;
        fifteen_yr?: number;
        amount?: number;
        thirty_yr?: number;
        hc_interest_rate?: number;
    }

    // property/mortgage_lien
    export type MortgageLien = MortgageLienItem[];

    // property/mortgage_lien_all
    export type MortgageLienAll = MortgageLienItem[];

    // property/nod
    // Notice of default
    export interface Nod {
        last_default_date?: string;
        default_history?: CountyRecorderRecord[];
    }

    // property/on_market
    export interface OnMarket {
        listing_price?: number;
        listing_date?: string;
        has_price_considerations?: string;

        currently_listed?: boolean;
    }

    // property/owner_occupied
    export interface OwnerOccupied {
        owner_occupied?: boolean;
    }

    // property/rental_listing_status
    export interface RentalListingStatus {
        listing_price?: number;
        listing_date?: string;
        has_price_considerations?: string;

        listing_status?: RentalListingStatusType;
        lease_payment_frequency?: LeasePaymentFrequency;
    }

    // property/rental_on_market
    export interface RentalOnMarket extends OnMarket {
        lease_payment_frequency?: LeasePaymentFrequency;
    }

    export interface HCModeledValue {
        price_upr?: number;
        price_lwr?: number;
        price_mean?: number;
        fsd?: number;
    }

    // property/rental_value
    export type RentalValue = HCModeledValue;

    export interface ValueRange {
        name: string;
        low?: number;
        high?: number;
    }

    // property/value_within_block
    export interface ValueWithinBlock {
        property_type?: PropertyTypeCode;
        housecanary_value_percentile_range?: ValueRange;
        housecanary_value_sqft_percentile_range?: ValueRange;
        client_value_percentile_range?: ValueRange;
        client_value_sqft_percentile_range?: ValueRange;
    }

    // property/rental_value_within_block
    export type RentalValueWithinBlock = ValueWithinBlock;

    // property/rental_yield
    export interface RentalYield {
        gross_yield?: number;
        value?: number;
        monthly_rent?: number;
    }

    export interface SalesHistoryItem extends DebtOligationParties, CountyRecorderRecord {
        amount?: number;
    }

    // property/sales_history
    export type SalesHistory = SalesHistoryItem[];

    export interface SchoolInfo {
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

    // property/school
    export interface School {
        school?: {
            elementary?: SchoolInfo[];
            middle?: SchoolInfo[];
            high?: SchoolInfo[];
        }
    }

    // property/value
    export interface Value {
        value?: HCModeledValue;
    }

    export interface PriceMeanByQuality {
        poor?: number;
        subpar?: number;
        fair?: number;
        good?: number;
        excellent?: number;
    }

    export interface HCModeledValueByQuality extends HCModeledValue {
        price_mean_by_quality?: PriceMeanByQuality;
    }

    // property/value_by_quality
    export interface ValueByQuality {
        value?: HCModeledValueByQuality;
    }

    export interface ValueDetailsAdjustedRequest {
        add_beds?: number;  // int
        add_baths?: number; // float
        add_sqft?: number;  // int
        add_pools?: number; // int
    }

    // property/value_details_adjusted
    export interface ValueDetailsAdjusted {
        adjusted_value_to?: number;
        adjusted_beds_to?: number;
        adjusted_baths_to?: number;
        adjusted_sqft_to?: number;
        adjusted_pools_to?: number;
    }

    // property/value_forecast
    export interface ValueForecast { 
        month_03?: {value: number};
        month_06?: {value: number};
        month_12?: {value: number};
        month_18?: {value: number};
        month_24?: {value: number};
        month_30?: {value: number};
        month_36?: {value: number};
    }

    export interface ValueHPIAdjustedRequest {
        adjust_to_date?: string;   // yyyy-mm-01
        client_value?: number;
        client_date?: string;   // yyyy-mm-01
    }

    export interface ValueHPIAdjustedResult {
        from_value?: number;
        from_date?: string; // yyyy-mm-01
        to_date?: string;   // yyyy-mm-01
        adjusted_by?: {
            block?: number;
            blockgroup?: number;
            zip?: number;
            msa?: number;
            state?: number;
        }
    }

    // property/value_hpi_adjusted
    export interface ValueHPIAdjusted {
        client_value_adjusted?: ValueHPIAdjustedResult;
        housecanary_value_adjusted?: ValueHPIAdjustedResult;
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

    export type MGetReturn = MGetResponse<MGetItem>;
}

// block level
export namespace BlockLevel {
    export type Component
    = "block/crime"
    | "block/hazard_earthquake"
    | "block/hazard_hail"
    | "block/hazard_hurricane"
    | "block/hazard_tornado"
    | "block/hazard_wind"
    | "block/hcri"
    | "block/rental_value_distribution"
    | "block/superfund"
    | "block/value_distribution"
    | "block/value_ts_forecast"
    | "block/value_ts_historical"
    ;

    export interface RequestItem {
        block_id?: string;
        components?: string;
    }

    export interface BlokInfo {
        block_id: string;
    }

    export interface GeoPercentile {
        nation_percentile?: number;
        county_percentile?: number;
    }

    export interface CrimeStat extends GeoPercentile {
        incidents?: number;
    }

    // block/crime
    export interface Crime {
        all?: CrimeStat;
        property?: CrimeStat;
        violent?: CrimeStat;
        other?: CrimeStat;
    }

    // block/hazard_earthquake
    export interface HazardEarthquake extends GeoPercentile {
        max_percent_g?: number;
    }

    export interface HazardWeatherRelated extends GeoPercentile {
        accumulated_energy?: number;
    }

    // block/hazard_hail
    export type HazardHail = HazardWeatherRelated;
    // block/hazard_hurricane
    export type HazardHurricane = HazardWeatherRelated;
    // block/hazard_tornado
    export type HazardTornado = HazardWeatherRelated;
    // block/hazard_wind
    export type HazardWind = HazardWeatherRelated;

    // block/hcri
    export type HCRI = PropertyGrossYield;

    // block/rental_value_distribution
    export type RentalValueDistribution = ValueDistributionByProperty;

    export interface SuperFundDetailItem {
        updated_date?: string;  // yyyy-mm-dd
        link?: string;
        site_name?: string;
        npl_status?: string;
        epa_site_id?: string;
    }

    export interface SuperFundSites {
        count?: number;
        detail?: SuperFundDetailItem[];
    } 

    // block/superfund
    export interface SuperFund {
        within_miles_0?: SuperFundSites;
        within_miles_1?: SuperFundSites;
        within_miles_4?: SuperFundSites;
    }

    // block/value_distribution
    export type ValueDistribution = ValueDistributionByProperty;

    // block/value_ts_forecast
    export type ValueTSForecast = PropertyValueTimeSeries;

    // block/value_ts_historical
    export type ValueTSHistorical = PropertyValueTimeSeries;

    export interface MGetItem {
        block_info: BlokInfo;
        "block/crime"?: ComponentData<Crime>;
        "block/hazard_earthquake"?: ComponentData<HazardEarthquake>;
        "block/hazard_hail"?: ComponentData<HazardHail>;
        "block/hazard_hurricane"?: ComponentData<HazardHurricane>;
        "block/hazard_tornado"?: ComponentData<HazardTornado>;
        "block/hazard_wind"?: ComponentData<HazardWind>;
        "block/hcri"?: ComponentData<HCRI>;
        "block/rental_value_distribution"?: ComponentData<RentalValueDistribution>;
        "block/superfund"?: ComponentData<SuperFund>;
        "block/value_distribution"?: ComponentData<ValueDistribution>;
        "block/value_ts_forecast"?: ComponentData<ValueTSForecast>;
        "block/value_ts_historical"?: ComponentData<ValueTSHistorical>;
    }

    export type MGetReturn = MGetResponse<MGetItem>;
}

// blockgroup level
export namespace BlockGroupLevel {
    export type Component
    = "blockgroup/hcri"
    | "blockgroup/rental_value_distribution"
    | "blockgroup/value_distribution"
    | "blockgroup/value_ts_forecast"
    | "blockgroup/value_ts_historical"
    ;

    export interface RequestItem {
        blockgroup_id?: string;
        components?: string;
    }

    export interface BlokGroupInfo {
        blockgroup_id: string;
    }

    // blockgroup/hcri
    export type HCRI = PropertyGrossYield;

    // blockgroup/rental_value_distribution
    export type RentalValueDistribution = ValueDistributionByProperty;

    // blockgroup/value_distribution
    export type ValueDistribution = ValueDistributionByProperty;

    // blockgroup/value_ts_forecast
    export type ValueTSForecast = PropertyValueTimeSeries;

    // blockgroup/value_ts_historical
    export type ValueTSHistorical = PropertyValueTimeSeries;

    export interface MGetItem {
        blockgroup_info: BlokGroupInfo;
        "blockgroup/hcri"?: ComponentData<HCRI>;
        "blockgroup/rental_value_distribution"?: ComponentData<RentalValueDistribution>;
        "blockgroup/value_distribution"?: ComponentData<ValueDistribution>;
        "blockgroup/value_ts_forecast"?: ComponentData<ValueTSForecast>;
        "blockgroup/value_ts_historical"?: ComponentData<ValueTSHistorical>;
    }

    export type MGetReturn = MGetResponse<MGetItem>;
}

// zip level
export namespace ZipLevel {
    export type Component
    = "zip/affordability_ts_forecast"
    | "zip/affordability_ts_historical"
    | "zip/details"
    | "zip/hcri"
    | "zip/hpi_forecast"
    | "zip/hpi_historical"
    | "zip/hpi_ts_forecast"
    | "zip/hpi_ts_historical"
    | "zip/market_grade"
    | "zip/volatility"
    ;

    export interface RequestItem {
        zipcode?: string;
        components?: string;
    }

    export interface ZipcodeInfo {
        zipcode: string;
    }

    // zip/affordability_ts_forecast
    export type AffordabilityTSForecast = AffordabilityTimesSeries;
    // zip/affordability_ts_historical
    export type AffordabilityTSHistorical = AffordabilityTimesSeries;

    export interface DetailsMarketMetrics {
        inventory_total?: number;
        price_median?: number;
        estimated_sales_total?: number;
        market_action_median?: number;
        months_of_inventory_median?: number;
        days_on_market_median?: number;
    }

    export interface HistoricalMetrics {
        cagr_1_year?: number;
        cagr_5_years?: number;
        cagr_10_years?: number;
        cagr_20_years?: number;

        returns_1_year?: number;
        returns_5_years?: number;
        returns_10_years?: number;
        returns_20_years?: number;
    }

    // zip/details
    export interface Details {
        single_family?: DetailsMarketMetrics;
        multi_family?: DetailsMarketMetrics;
        historical?: HistoricalMetrics;
    }

    // zip/hcri
    export type HCRI = GrossYield;

    // zip/hpi_forecast
    export interface HPIForecast {
        cagr_12mo_f?: number;
        cagr_24mo_f?: number;
        cagr_36mo_f?: number;

        returns_12mo_f?: number;
        returns_24mo_f?: number;
        returns_36mo_f?: number;

        max_12mo_loss?: number;
        risk_12mo_loss?: number;
    }

    // zip/hpi_historical
    export type HPIHistorical = HistoricalMetrics;

    // zip/hpi_ts_forecast
    export type HPITSForecast = HPITimesSeries;
    // zip/hpi_ts_historical
    export type HPITSHistorical = HPITimesSeries;

    export type MarketGradeCode = "A" | "B" | "C" | "D" | "F";

    // zip/market_grade
    export interface MarketGrade {
        market_grade?: MarketGradeCode;
    }

    // zip/volatility
    export interface Volatility {
        modigliani_risk_adjusted_return?: number;
        sharpe_ratio?: number;
        beta?: number;
    }

    export interface MGetItem {
        zipcode_info: ZipcodeInfo;
        "zip/affordability_ts_forecast"?: ComponentData<AffordabilityTSForecast>;
        "zip/affordability_ts_historical"?: ComponentData<AffordabilityTSHistorical>;
        "zip/details"?: ComponentData<Details>;
        "zip/hcri"?: ComponentData<HCRI>;
        "zip/hpi_forecast"?: ComponentData<HPIForecast>;
        "zip/hpi_historical"?: ComponentData<HPIHistorical>;
        "zip/hpi_ts_forecast"?: ComponentData<HPITSForecast>;
        "zip/hpi_ts_historical"?: ComponentData<HPITSHistorical>;
        "zip/market_grade"?: ComponentData<MarketGrade>;
        "zip/volatility"?: ComponentData<Volatility>;
    }

    export type MGetReturn = MGetResponse<MGetItem>;
}

// metrodiv level
export namespace MetroDivLevel {
    export type Component
    = "metrodiv/affordability_ts_forecast"
    | "metrodiv/affordability_ts_historical"
    | "metrodiv/hpi_ts_forecast"
    | "metrodiv/hpi_ts_historical"
    ;

    export interface RequestItem {
        metrodiv?: string;
        components?: string;
    }

    export interface MetroDivInfo {
        metrodiv: string;
        metrodiv_name: string;
        msa: string;
        msa_name: string;
    }

    // metrodiv/affordability_ts_forecast
    export type AffordabilityTSForecast = AffordabilityTimesSeries;
    // metrodiv/affordability_ts_historical
    export type AffordabilityTSHistorical = AffordabilityTimesSeries;

    // metrodiv/hpi_ts_forecast
    export type HPITSForecast = HPITimesSeries;
    // metrodiv/hpi_ts_historical
    export type HPITSHistorical = HPITimesSeries;

    export interface MGetItem {
        metrodiv_info: MetroDivInfo;
        "metrodiv/affordability_ts_forecast"?: ComponentData<AffordabilityTSForecast>;
        "metrodiv/affordability_ts_historical"?: ComponentData<AffordabilityTSHistorical>;
        "metrodiv/hpi_ts_forecast"?: ComponentData<HPITSForecast>;
        "metrodiv/hpi_ts_historical"?: ComponentData<HPITSHistorical>;
    }

    export type MGetReturn = MGetResponse<MGetItem>;
}

// msa level
export namespace MSALevel {
    export type Component
    = "msa/affordability_ts_forecast"
    | "msa/affordability_ts_historical"
    | "msa/details"
    | "msa/hcri"
    | "msa/hpi_ts_forecast"
    | "msa/hpi_ts_historical"
    ;

    export interface RequestItem {
        msa?: string;
        components?: string;
    }

    export interface MSAInfo {
        msa: string;
        msa_name: string;
    }

    // msa/affordability_ts_forecast
    export type AffordabilityTSForecast = AffordabilityTimesSeries;
    // msa/affordability_ts_historical
    export type AffordabilityTSHistorical = AffordabilityTimesSeries;

    // msa/details
    export interface Details {
        msa?: string;
        msa_name?: string;

        cagr_1?: number;
        cagr_5?: number;
        cagr_10?: number;
        cagr_20?: number;

        returns_1?: number;
        returns_5?: number;
        returns_10?: number;
        returns_20?: number;

        max_12mo_loss?: number;
        risk_12mo_loss?: number;
    }

    // msa/hcri
    export type HCRI = GrossYield;

    // msa/hpi_ts_forecast
    export type HPITSForecast = HPITimesSeries;
    // msa/hpi_ts_historical
    export type HPITSHistorical = HPITimesSeries;

    export interface MGetItem {
        msa_info: MSAInfo;
        "msa/affordability_ts_forecast"?: ComponentData<AffordabilityTSForecast>;
        "msa/affordability_ts_historical"?: ComponentData<AffordabilityTSHistorical>;
        "msa/details"?: ComponentData<Details>;
        "msa/hcri"?: ComponentData<HCRI>;
        "msa/hpi_ts_forecast"?: ComponentData<HPITSForecast>;
        "msa/hpi_ts_historical"?: ComponentData<HPITSHistorical>;
    }

    export type MGetReturn = MGetResponse<MGetItem>;
}

// state level
export namespace StateLevel {
    export type Component
    = "state/affordability_ts_forecast"
    | "state/affordability_ts_historical"
    | "state/hcri"
    | "state/hpi_ts_forecast"
    | "state/hpi_ts_historical"
    ;

    export interface RequestItem {
        state?: StateCode;
        components?: string;
    }

    export interface StateInfo {
        state: StateCode;
    }

    // state/affordability_ts_forecast
    export type AffordabilityTSForecast = AffordabilityTimesSeries;
    // state/affordability_ts_historical
    export type AffordabilityTSHistorical = AffordabilityTimesSeries;

    // state/hcri
    export type HCRI = GrossYield;

    // state/hpi_ts_forecast
    export type HPITSForecast = HPITimesSeries;
    // state/hpi_ts_historical
    export type HPITSHistorical = HPITimesSeries;

    export interface MGetItem {
        state_info: StateInfo;
        "state/affordability_ts_forecast"?: ComponentData<AffordabilityTSForecast>;
        "state/affordability_ts_historical"?: ComponentData<AffordabilityTSHistorical>;
        "state/hcri"?: ComponentData<HCRI>;
        "state/hpi_ts_forecast"?: ComponentData<HPITSForecast>;
        "state/hpi_ts_historical"?: ComponentData<HPITSHistorical>;
    }

    export type MGetReturn = MGetResponse<MGetItem>;
}