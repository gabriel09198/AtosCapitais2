import axios from "axios";

export interface branchs {
    name : string;
    cnpj : string;
}

export interface sales {
    id : number;
    cnpj: string;
    branche_name : string;
    date : Date;
    value: Number;
    goal: number;
}

export interface Branch {
    branch : branchs;
    sales : sales;
} 

const API_URL = 'https://atos-capital-backend-docker.onrender.com/api/daily_sale/require_daily_sales/';

/**
 * Recupera os dados de vendas e filiais da API usando token de autenticação.
 * 
 * @param token Token de autenticação obtido através da função getToken
 * @returns Um objeto com arrays de branchs e sales
 * @author Thayane Gisele thayane.gisele@souunit.com.br
 */
export const fetchDailySalesData = async (token: string): Promise<{ branchs: branchs[]; sales: sales[] }> => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const { branchs, sales } = response.data;
        return { branchs, sales };
    } catch (error: any) {
        console.error("Erro ao buscar dados de vendas diárias:", error);
        throw new Error(error.response?.data?.message || "Erro ao buscar dados da API");
    }
};

