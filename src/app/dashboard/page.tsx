
import ChartOverview from '@/components/chart';
import { Sales } from '@/components/sales';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeDollarSign, DollarSign, Percent, User } from 'lucide-react';
export default function dashboard() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2  lg:grid-cols-4 gap-4 ">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total vendas
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"/>
              
          </div>

            <CardDescription>
              Total de vendas em 30 dias
            </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">R$ 20.000</p>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Novas Empresas
            </CardTitle>
            <User className="ml-auto w-4 h-4"/>
              
          </div>

            <CardDescription>
              Total de Empresas
            </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">588</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Relatórios
            </CardTitle>
            <Percent className="ml-auto w-4 h-4"/>
              
          </div>

            <CardDescription>
              Total de Relatórios
            </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">33</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total de Pedidos
            </CardTitle>
            <BadgeDollarSign className="ml-auto w-4 h-4"/>
              
          </div>

            <CardDescription>
              Total de Pedidos em 30 dias
            </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">93</p>
        </CardContent>
      </Card>

      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
         <ChartOverview/>
         <Sales/>
      </section>
    </main>
  );
} 