'use client'

import { useEffect, useState } from 'react'
import { CircleDollarSign } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { fetchDailySalesData } from '@/services/dateService'

export function Sales() {
  const [branches, setBranches] = useState<{ name: string; cnpj: string }[]>([])

  useEffect(() => {
    const carregarBranches = async () => {
      try {
        const token = localStorage.getItem('token') || ''
        const { branchs } = await fetchDailySalesData(token)
        setBranches(branchs)
      } catch (err) {
        console.error('Erro ao buscar filiais:', err)
      }
    }

    carregarBranches()
  }, [])

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Histórico de Consulta
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
      </CardHeader>
      <CardDescription className=""></CardDescription>
      <CardContent>
        {branches.map((branch, index) => (
          <article key={index} className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src={`https://ui-avatars.com/api/?name=${branch.name}`} />
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>

            <div>
              <p className="text-sm sm:text-base font-semibold">{branch.name}</p>
              <span className="text-[12px] sm:text-sm text-gray-400">{branch.cnpj}</span>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  )
}
