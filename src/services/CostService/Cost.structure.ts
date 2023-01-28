export interface ICostServiceData {
    stmt_fiscal_year: string;
    agency_nm: string;
    gross_cost_bil_amt: string;
    earned_revenue_bil_amt: string;
    subtotal_bil_amt: string;
    net_cost_bil_amt: string;
}

export interface ICostServiceResponse {
    data: ICostServiceData[];
    meta: {
        "total-pages": number;
    }
}
