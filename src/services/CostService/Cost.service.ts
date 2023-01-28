import api from "../api";
import {ICostServiceResponse} from "./Cost.structure";

class CostService {

    async getStatementNetCost(pageNumber: number = 1): Promise<ICostServiceResponse | false> {

        /*
        * Para entender esse filtros, faça a seguinte leitura:
        * https://fiscaldata.treasury.gov/datasets/u-s-government-financial-report/statements-of-net-cost
        *
        * To understand these filters, read the following:
        * https://fiscaldata.treasury.gov/datasets/u-s-government-financial-report/statements-of-net-cost
        */
        const filterGreaterThen2018 = 'filter=stmt_fiscal_year:gte:2018'
        const filterExactFilds = 'fields=stmt_fiscal_year,agency_nm,gross_cost_bil_amt,earned_revenue_bil_amt,subtotal_bil_amt,net_cost_bil_amt'
        const filterPage = `page[number]=${pageNumber}&page[size]=8`

        try {
            const {data} = await api.get(`/v2/accounting/od/statement_net_cost?${filterGreaterThen2018}?${filterExactFilds}?${filterPage}`)
            return data
        } catch (error) {
            return false;
        }
    }
}
export default new CostService()
