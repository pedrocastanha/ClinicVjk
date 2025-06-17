import React, { useState } from 'react';
import { ArrowLeft, Eye, Download, FileText, Utensils, Heart, Lock, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import logoImage from '../assets/images/image.png';

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientType, setClientType] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Códigos de acesso
  const ACCESS_CODES = {
    nutricao: 'nutri2024',
    estetica: 'estetica2024'
  };

  // Documentos disponíveis
  const DOCUMENTS = {
    nutricao: [
      {
        id: 1,
        name: 'Guia de Sopas VJK',
        description: 'Receitas nutritivas e saborosas de sopas para uma alimentação equilibrada e saudável.',
        file: 'GuiadeSopas-VJK(1).pdf',
        icon: Utensils,
        background: 'bg-gradient-to-r from-green-400 to-emerald-500',
        color: 'text-green-700'
      },
      {
        id: 2,
        name: 'Molhos Saudáveis',
        description: 'Receitas de molhos nutritivos para incrementar suas refeições de forma saborosa.',
        file: 'Molhos-Atualizada(1).pdf',
        icon: Heart,
        background: 'bg-gradient-to-r from-orange-400 to-red-500',
        color: 'text-orange-700'
      }
    ],
    estetica: [
      {
        id: 3,
        name: 'Orientações Pós-Criolipólise',
        description: 'Guia completo com cuidados e orientações essenciais após o procedimento de criolipólise.',
        file: 'Orientaçõespóscrio-pdf(1).pdf',
        icon: FileText,
        background: 'bg-gradient-to-r from-purple-400 to-pink-500',
        color: 'text-purple-700'
      }
    ]
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (ACCESS_CODES[clientType] === accessCode) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Código de acesso inválido. Verifique o tipo de atendimento e o código fornecido.');
      setAccessCode('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setClientType('');
    setAccessCode('');
    setError('');
    setSelectedDocument(null);
  };

  const openDocument = (document) => {
    setSelectedDocument(document);
  };

  const closeDocument = () => {
    setSelectedDocument(null);
  };

  const downloadDocument = (filename) => {
    const link = document.createElement('a');
    link.href = `/src/assets/pdfs/${filename}`;
    link.download = filename;
    link.click();
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* Back Button */}
          <Button
            onClick={() => window.location.href = '/'}
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-amber-600"
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar ao Site
          </Button>

          {/* Login Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-white/20">
            {/* Logo */}
            <div className="text-center mb-8">
              <img 
                src={logoImage} 
                alt="Emily Vujanski" 
                className="h-16 w-auto mx-auto mb-4"
              />
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Área do Cliente</h1>
              <p className="text-gray-600">
                Acesse seus documentos e materiais exclusivos
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Atendimento
                </label>
                <Select value={clientType} onValueChange={setClientType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo de atendimento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nutricao">Nutrição</SelectItem>
                    <SelectItem value="estetica">Estética</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Código de Acesso
                </label>
                <Input
                  type="password"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Digite seu código de acesso"
                  className="w-full"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full gradient-gold text-white py-3 text-lg hover:opacity-90 smooth-transition"
                disabled={!clientType || !accessCode}
              >
                <Lock className="mr-2" size={20} />
                Acessar Documentos
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const documents = DOCUMENTS[clientType] || [];
  const title = clientType === 'nutricao' ? 'Materiais de Nutrição' : 'Materiais de Estética';
  const subtitle = clientType === 'nutricao' 
    ? 'Seus guias e receitas exclusivas para uma alimentação saudável'
    : 'Orientações e cuidados para seus procedimentos estéticos';

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={logoImage} 
                alt="Emily Vujanski" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <p className="text-gray-600">{subtitle}</p>
              </div>
            </div>
            
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500 text-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-2" size={16} />
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8">
          {documents.map((document) => (
            <div key={document.id} className="group">
              {/* Horizontal Document Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift smooth-transition">
                <div className="flex flex-col lg:flex-row">
                  {/* Background Image Section */}
                  <div className={`lg:w-1/3 h-64 lg:h-auto ${document.background} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <document.icon className="text-white" size={80} />
                    </div>
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-2/3 p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{document.name}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{document.description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={() => openDocument(document)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 smooth-transition"
                        >
                          <Eye className="mr-2" size={20} />
                          Visualizar Documento
                        </Button>
                        
                        <Button
                          onClick={() => downloadDocument(document.file)}
                          variant="outline"
                          className="flex-1 border-green-500 text-green-600 hover:bg-green-50 py-3 smooth-transition"
                        >
                          <Download className="mr-2" size={20} />
                          Baixar PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {documents.length === 0 && (
          <div className="text-center py-16">
            <FileText className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum documento disponível</h3>
            <p className="text-gray-500">Os documentos para este tipo de atendimento serão disponibilizados em breve.</p>
          </div>
        )}
      </div>

      {/* Document Viewer Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800">{selectedDocument.name}</h3>
              <Button
                onClick={closeDocument}
                variant="ghost"
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </Button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 p-6">
              <iframe
                src={`/src/assets/pdfs/${selectedDocument.file}`}
                className="w-full h-full rounded-lg border"
                title={selectedDocument.name}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientArea;

