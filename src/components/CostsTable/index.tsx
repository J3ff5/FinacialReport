import React from "react";
import {ICostServiceData} from "../../services/CostService/Cost.structure";
import CostService from "../../services/CostService/Cost.service";

export default function CostsTable() {
    const [costs, setCosts] = React.useState([] as ICostServiceData[]);

    const getCosts = React.useCallback(async () => {
        const result = await CostService.getStatementNetCost();

        if (!result) {
            return;
        }

        setCosts(result.data);
    }, [])

    React.useEffect(() => {
        void getCosts();
    }, [])

    const renderTable = React.useMemo(() => {
        return costs?.map((cost, index) => {
            const amountFormat = cost.earned_revenue_bil_amt === "null" ? 'N/D' : cost.earned_revenue_bil_amt;
            return (
                <tr key={index}>
                    <td className="w-1/6 text-center border-b border-t bg-gray-1">{cost.agency_nm}</td>
                    <td className="w-1/6 text-center border-b border-t bg-gray-1">{cost.gross_cost_bil_amt}</td>
                    <td className="w-1/6 text-center border-b border-t bg-gray-1">{amountFormat}</td>
                    <td className="w-1/6 text-center border-b border-t bg-gray-1">{cost.subtotal_bil_amt}</td>
                    <td className="w-1/6 text-center border-b border-t bg-gray-1">{cost.net_cost_bil_amt}</td>
                    <td className="w-1/6 text-center border-b border-t bg-gray-1">{cost.stmt_fiscal_year}</td>
                </tr>
            )
        })
    }, [costs])

    return (
        <table className="table-responsive table-auto w-max border border-spacing-y-2 border-separate">
            <thead>
            <tr>
                <th className="w-1/6 text-center">Nome da Agência</th>
                <th className="w-1/6 text-center">Valor Bruto</th>
                <th className="w-1/6 text-center">Receita Adquirida</th>
                <th className="w-1/6 text-center">Subtotal</th>
                <th className="w-1/6 text-center">Custo Liquido</th>
                <th className="w-1/6 text-center">Ano Fiscal</th>
            </tr>
            </thead>
            <tbody>
            {renderTable}
            </tbody>
        </table>
    )
}
