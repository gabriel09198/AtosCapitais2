import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export function Sales() {
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
      <CardDescription className="">


      </CardDescription>
      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
           <Avatar className="w-10 h-10">
            
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Pbi7RMtolmaxfBaGDQzgJSzymVRtx9UKNA&s"/>
            <AvatarFallback>DV</AvatarFallback>
            </Avatar> 

            <div>
                <p className="text-sm sm:text-base font-semibold">filial 4</p>
                <span className="text-[12px] sm:text-sm text-gray-400">filial@gmail.com</span>
            </div>

        </article>

        <article className="flex items-center gap-2 border-b py-2">
           <Avatar className="w-10 h-10">
            
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cDghCymbHDaq9iKk5TZaBqi5Qdij_KHOhQ&s"/>
            <AvatarFallback>DV</AvatarFallback>
            </Avatar> 

            <div>
                <p className="text-sm sm:text-base font-semibold">filial 3</p>
                <span className="text-[12px] sm:text-sm text-gray-400">banese@gmail.com</span>
            </div>

        </article>
        <article className="flex items-center gap-2 border-b py-2">
           <Avatar className="w-10 h-10">
            
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrwrKNnDa3lgd94rQ3zszeT7oUw_5tSkYtQ&s"/>
            <AvatarFallback>DV</AvatarFallback>
            </Avatar> 

            <div>
                <p className="text-sm sm:text-base font-semibold">Filial 2</p>
                <span className="text-[12px] sm:text-sm text-gray-400">filial@gmail.com</span>
            </div>

        </article>

        <article className="flex items-center gap-2 border-b py-2">
           <Avatar className="w-10 h-10">
            
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREl5bKzjsehGQToeHt_d2V0NtNtqKDI4qDag&s"/>
            <AvatarFallback>DV</AvatarFallback>
            </Avatar> 

            <div>
                <p className="text-sm sm:text-base font-semibold">Filial 1</p>
                <span className="text-[12px] sm:text-sm text-gray-400">filial@gmail.com</span>
            </div>

        </article>
      </CardContent>
      </Card>
    )
}


