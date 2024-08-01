'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { users } from "@/app/utils/user";
import { useState } from "react";
import Image from "next/image";

export default function SettingPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <div className="container mx-auto p-6 px-20 sm:max-w-[50%]">
      <h1 className="text-2xl font-bold mb-6">Configuraçes do Usuário</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full mr-6 flex items-center justify-center">
            {
              users.filter((user) => user.id === 2).map((user, id) => (
                <Image key={id} src={user.img} alt={`Foto de ${user.name}`} className="w-full h-full object-cover rounded-full" />
              ))
            }
          </div>
          <div>
            {users.filter((user) => user.id === 2).map((user) => (
              <>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.role}</p>
              </>
            ))}
            <button className="text-blue-500 hover:text-blue-700 mt-2">
              Alterar foto
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-7000 mb-2">
            Nome
          </label>
          <Input
            disabled
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            defaultValue={users.filter((user) => user.id === 3).map((user) => user.name)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input
            disabled
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            defaultValue={users.filter((user) => user.id === 3).map((user) => user.email)}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Alterar Senha</h3>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Nova Senha
            </label>
            <Input
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Digite sua nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar Nova Senha
            </label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Confirme sua nova senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Button variant="destructive">Log out</Button>
            <Button
              variant="default"
              disabled={!newPassword || !confirmPassword}
            >
              Alterar Senha
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}