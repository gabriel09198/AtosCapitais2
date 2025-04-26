'use client'

import { useEffect, useState } from 'react'
import { DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { fetchDailySalesData } from '@/services/dateService'

export default function ChartOverview() {
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const token = localStorage.getItem('token') || ''
        const { sales } = await fetchDailySalesData(token)

        const vendasPorMes: { [mes: string]: number } = {}

        sales.forEach((venda) => {
          const mes = new Date(venda.date).toLocaleString('pt-BR', { month: 'long' })
          vendasPorMes[mes] = (vendasPorMes[mes] || 0) + Number(venda.value)
        })

        const dadosFormatados = Object.entries(vendasPorMes).map(([mes, valor]) => ({
          month: mes.charAt(0).toUpperCase() + mes.slice(1), 
          total: valor
        }))

        setChartData(dadosFormatados)
      } catch (err) {
        console.error('Erro ao carregar dados do gráfico:', err)
      }
    }

    carregarDados()
  }, [])

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Overview Histórico
          </CardTitle>
          <DollarSign className="ml-auto w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="min-h-[200px] w-full">
          <BarChart width={500} height={300} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="total" fill="#2563eb" />
          </BarChart>
        </div>
      </CardContent>
    </Card>
  )
}
