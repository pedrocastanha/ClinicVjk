import React, { useState } from 'react';
import { ArrowLeft, Eye, Download, Share2, ChevronLeft, ChevronRight, Plus, Lock, User, LogOut, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import logoImage from '../assets/images/image.png';
import nutritionGuideImage from '../assets/images/document-nutrition-guide.png';
import saucesGuideImage from '../assets/images/document-sauces-guide.png';
import cryoGuideImage from '../assets/images/document-cryolipolysis-guide.png';
import { Link } from 'react-router-dom';

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientType, setClientType] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [currentDocumentIndex, setCurrentDocumentIndex] = useState(0);

  // Códigos de acesso
  const ACCESS_CODES = {
    nutricao: 'nutri2024',
    estetica: 'estetica2024'
  };

  // Documentos disponíveis com imagens
  const DOCUMENTS = {
    nutricao: [
      {
        id: 1,
        name: 'Guia de Sopas VJK',
        description: 'Receitas nutritivas e saborosas de sopas para uma alimentação equilibrada e saudável.',
        file: 'GuiadeSopas-VJK(1).pdf',
        image: nutritionGuideImage,
        category: 'Nutrição',
        color: 'from-emerald-400 to-teal-500'
      },
      {
        id: 2,
        name: 'Molhos Saudáveis',
        description: 'Receitas de molhos nutritivos para incrementar suas refeições de forma saborosa.',
        file: 'Molhos-Atualizada(1).pdf',
        image: saucesGuideImage,
        category: 'Nutrição',
        color: 'from-orange-400 to-red-500'
      }
    ],
    estetica: [
      {
        id: 3,
        name: 'Orientações Pós-Criolipólise',
        description: 'Guia completo com cuidados e orientações essenciais após o procedimento de criolipólise.',
        file: 'Orientaçõespóscrio-pdf(1).pdf',
        image: cryoGuideImage,
        category: 'Estética',
        color: 'from-blue-400 to-purple-500'
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
    setCurrentDocumentIndex(0);
  };

  const openDocument = (document, index) => {
    setSelectedDocument(document);
    setCurrentDocumentIndex(index);
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

  const shareDocument = (document) => {
    if (navigator.share) {
      navigator.share({
        title: document.name,
        text: document.description,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores que não suportam Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const nextDocument = () => {
    const documents = DOCUMENTS[clientType] || [];
    const nextIndex = (currentDocumentIndex + 1) % documents.length;
    setCurrentDocumentIndex(nextIndex);
    setSelectedDocument(documents[nextIndex]);
  };

  const prevDocument = () => {
    const documents = DOCUMENTS[clientType] || [];
    const prevIndex = currentDocumentIndex === 0 ? documents.length - 1 : currentDocumentIndex - 1;
    setCurrentDocumentIndex(prevIndex);
    setSelectedDocument(documents[prevIndex]);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 flex items-center justify-center p-4">
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
            className="mb-6 text-gray-600 hover:text-blue-600 hover-elegant smooth-transition"
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar ao Site
          </Button>

          {/* Login Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-white/20 hover-lift smooth-transition">
            {/* Logo */}
            <div className="text-center mb-8">
              <img 
                src={logoImage} 
                alt="Emily Vujanski" 
                className="h-16 w-auto mx-auto mb-4 hover-scale smooth-transition"
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
                  <SelectTrigger className="w-full hover-elegant smooth-transition">
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
                  className="w-full hover-elegant smooth-transition"
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
                className="w-full gradient-gold text-white py-3 text-lg hover-button smooth-transition"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
              <img 
                  src={logoImage} 
                  alt="Emily Vujanski" 
                  className="h-12 w-auto hover-scale smooth-transition"
               />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <p className="text-gray-600">{subtitle}</p>
              </div>
            </div>
            
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500 text-red-600 hover:bg-red-50 hover-button smooth-transition"
            >
              <LogOut className="mr-2" size={16} />
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* Documents Horizontal Carousel */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          {/* Navigation Arrows */}
          {documents.length > 1 && (
            <>
              <Button
                onClick={() => setCurrentDocumentIndex(currentDocumentIndex === 0 ? documents.length - 1 : currentDocumentIndex - 1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg hover-button smooth-transition"
                size="icon"
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                onClick={() => setCurrentDocumentIndex((currentDocumentIndex + 1) % documents.length)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg hover-button smooth-transition"
                size="icon"
              >
                <ChevronRight size={24} />
              </Button>
            </>
          )}

          {/* Document Display */}
          <div className="mx-16">
            {documents.length > 0 ? (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover-lift smooth-transition">
                <div className="flex flex-col lg:flex-row h-96">
                  {/* Document Image Section */}
                  <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img 
                      src={documents[currentDocumentIndex].image} 
                      alt={documents[currentDocumentIndex].name}
                      className="w-48 h-48 object-contain hover-scale smooth-transition cursor-pointer"
                      onClick={() => openDocument(documents[currentDocumentIndex], currentDocumentIndex)}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {documents[currentDocumentIndex].category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">{documents[currentDocumentIndex].name}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{documents[currentDocumentIndex].description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={() => openDocument(documents[currentDocumentIndex], currentDocumentIndex)}
                          className="flex-1 gradient-gold text-white py-3 client-action-button"
                        >
                          <Eye className="mr-2" size={20} />
                          Visualizar
                        </Button>
                        
                        <div className="flex gap-2">
                          <Button
                            onClick={() => downloadDocument(documents[currentDocumentIndex].file)}
                            variant="outline"
                            className="border-green-500 text-green-600 hover:bg-green-50 client-action-button"
                            size="icon"
                          >
                            <Download size={20} />
                          </Button>
                          
                          <Button
                            onClick={() => shareDocument(documents[currentDocumentIndex])}
                            variant="outline"
                            className="border-blue-500 text-blue-600 hover:bg-blue-50 client-action-button"
                            size="icon"
                          >
                            <Share2 size={20} />
                          </Button>
                        </div>
                      </div>

                      {/* Document Counter */}
                      <div className="text-center text-gray-500 text-sm">
                        {currentDocumentIndex + 1} de {documents.length} documentos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-white rounded-3xl shadow-xl p-12 hover-lift smooth-transition">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Plus className="text-gray-400" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum documento disponível</h3>
                  <p className="text-gray-500">Os documentos para este tipo de atendimento serão disponibilizados em breve.</p>
                </div>
              </div>
            )}
          </div>

          {/* Add New Document Button */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-dashed border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover-elegant smooth-transition px-8 py-4"
            >
              <Plus className="mr-2" size={20} />
              Adicionar Novo Documento
            </Button>
          </div>
        </div>
      </div>

      {/* Document Viewer Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-bold text-gray-800">{selectedDocument.name}</h3>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {currentDocumentIndex + 1} de {documents.length}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                {documents.length > 1 && (
                  <>
                    <Button
                      onClick={prevDocument}
                      variant="ghost"
                      size="icon"
                      className="hover-button smooth-transition"
                    >
                      <ChevronLeft size={20} />
                    </Button>
                    <Button
                      onClick={nextDocument}
                      variant="ghost"
                      size="icon"
                      className="hover-button smooth-transition"
                    >
                      <ChevronRight size={20} />
                    </Button>
                  </>
                )}
                <Button
                  onClick={closeDocument}
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700 hover-button smooth-transition"
                >
                  <X size={20} />
                </Button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 p-6">
              <iframe
                src={`/src/assets/pdfs/${selectedDocument.file}`}
                className="w-full h-full rounded-lg border shadow-inner"
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

