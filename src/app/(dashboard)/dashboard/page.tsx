'use client'

import { Cell, Legend, Pie, PieChart, Tooltip, Bar, BarChart, ResponsiveContainer, Rectangle, CartesianGrid, XAxis, YAxis } from "recharts"

export default function DashboardPage() {
  const data = [
    { name: 'Contatos', value: 30 },
    { name: 'Reunies', value: 20 },
  ]
  const Bardata = [
    {
      name: 'Serviço A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Serviço B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
  ];
  return (
    <div>
      <div className="flex flex-col l sm:flex-col md:flex-row gap-4 sm:px-20 pl-4 pr-4">
        {/* rea 1 */}
        <div className="w-full md:w-full bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Área 1</h2>
          <p>Conteúdo da primeira área</p>
        </div>

        {/* rea 2 */}
        <div className="flex flex-col gap-4">
          <div className="sm:w-auto  items-cente  bg-white rounded-lg shadow-md p-6  md:flex  flex-col">


            <div className="mt-2 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Utilização de Serviços</h3>

              <div className="w-full sm:flex-row justify-between items-center">

                <div className="w-[100%] flex justify-center items-center">
                  <PieChart width={300} height={300}>
                    <Pie
                      data={data}
                      cx={150}
                      cy={150}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell key="cell-0" fill="#222" />
                      <Cell key="cell-1" fill="#777" />

                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
              </div>

            </div>
          </div>

          {/* rea 3 */}
          <div className="sm:w-auto items-center bg-white rounded-lg shadow-md p-6  md:flex  flex-col">

            <div className="mt-2 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Utilização de Serviços</h3>

              <div className="w-full sm:flex-row justify-between">

                <div className="w-[100%] flex  items-center">

                  <BarChart
                    width={500}
                    height={300}
                    data={Bardata}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                  </BarChart>

                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  )
}