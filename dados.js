/* Conteúdo do site em 4 idiomas (pt, es, fr, en). Para mudar um texto ou uma resposta do chatbot, edite aqui. */
var TOPICOS={
    documentacao: {
      nome: "Documentação",
      perguntas: [
        { p: "Como regularizo minha situação na Polícia Federal?",
          r: "Faça o agendamento no site da Polícia Federal e compareça com passaporte e os documentos do seu tipo de autorização. Você recebe a CRNM (Carteira de Registro Nacional Migratório). O prazo costuma ser de 90 dias após a entrada, conforme o caso.\n\nConfirme a lista exata de documentos no site da PF." },
        { p: "Como tiro o CPF?",
          r: "O CPF pode ser emitido na Receita Federal, nos Correios e em bancos conveniados, como Banco do Brasil e Caixa. Leve passaporte ou outro documento de identidade. Algumas formas de emissão têm taxa, então confirme antes." },
        { p: "Posso trabalhar? Como tiro a carteira de trabalho?",
          r: "Depende da sua autorização de residência. Se ela permite trabalhar, emita a Carteira de Trabalho Digital pelo aplicativo, usando sua conta gov.br e o CPF." },
        { p: "Como uso o sistema de saúde (SUS)?",
          r: "Vá à unidade de saúde do seu bairro com documento e comprovante de residência para fazer o Cartão SUS. O atendimento é aberto também a estrangeiros.\n\nEm emergência, ligue 192 (SAMU)." },
        { p: "Preciso traduzir meus documentos?",
          r: "Certidões e diplomas do exterior costumam precisar de apostila de Haia e tradução juramentada feita por tradutor público no Brasil. Pergunte ao órgão onde vai entregar o documento o que ele exige." },
        { p: "Quais telefones úteis devo salvar?",
          r: "190 Polícia Militar\n192 SAMU (ambulância)\n193 Bombeiros\n156 Central da Prefeitura de Curitiba" }
      ]
    },
    habitacao: {
      nome: "Habitação",
      perguntas: [
        { p: "Como alugar um imóvel?",
          r: "Você pode alugar por imobiliária ou diretamente com o proprietário. Normalmente pedem documento de identidade (CRNM ou protocolo), CPF e comprovante de renda. Leia o contrato com calma e peça ajuda se algo não ficar claro." },
        { p: "O que é fiador, seguro-fiança e caução?",
          r: "São garantias do aluguel. Fiador é uma pessoa que se responsabiliza pelo contrato. Seguro-fiança é um seguro pago ao longo do contrato. Caução é um depósito de até 3 meses de aluguel. Estrangeiros recém-chegados costumam usar seguro-fiança ou caução." },
        { p: "Quais bairros posso considerar?",
          r: "Batel e Bigorrilho são modernos e mais caros. Água Verde, Portão e Cabral são residenciais e bem servidos de transporte. O Centro tem muito transporte e comércio, mas é movimentado. Veja os valores atuais em sites de imóveis antes de decidir." },
        { p: "Que contas da casa vou pagar?",
          r: "Em geral: aluguel, condomínio, água (Sanepar), luz (Copel), gás e internet. Pergunte na imobiliária quais já estão incluídas e peça a transferência de titularidade das contas." },
        { p: "Onde ficar nos primeiros dias?",
          r: "Muita gente começa com hospedagem de temporada, apart-hotel ou hostel até conhecer os bairros. Desconfie de anúncios que pedem pagamento antecipado sem você ter visto o imóvel ou o contrato." }
      ]
    },
    adaptacao: {
      nome: "Adaptação",
      perguntas: [
        { p: "Como funciona o transporte público?",
          r: "Curitiba tem ônibus expressos vermelhos, ônibus de bairro e estações-tubo de vidro. Veja as formas de pagamento atuais no site da URBS. Aplicativos de mapa mostram linhas e horários em tempo real." },
        { p: "Como é o clima? O que devo levar?",
          r: "É frio para os padrões brasileiros e o tempo muda muito no mesmo dia. O inverno vai de junho a agosto e pode ter geada. Tenha casaco e guarda-chuva o ano todo." },
        { p: "Como abro uma conta bancária?",
          r: "Em geral você precisa de documento de identidade (CRNM ou protocolo), CPF e comprovante de residência. Cada banco tem regras próprias, então pergunte antes. O Pix é muito usado para pagamentos do dia a dia." },
        { p: "Onde aprendo português?",
          r: "Universidades públicas, como a UFPR, e organizações sociais costumam oferecer cursos de português para estrangeiros, alguns gratuitos. Pergunte também na Central 156 da Prefeitura." },
        { p: "Como conheço pessoas e a cidade?",
          r: "Visite parques como o Barigui e o Jardim Botânico, a feira do Largo da Ordem aos domingos e o Mercado Municipal. Grupos de estrangeiros e eventos culturais ajudam a criar uma rede de contatos." }
      ]
    },
    escola: {
      nome: "Escola dos filhos",
      perguntas: [
        { p: "Como matriculo meus filhos?",
          r: "A rede pública tem escolas municipais (educação infantil e primeiros anos do fundamental) e estaduais (anos finais e ensino médio). Procure uma escola perto de casa ou a Secretaria de Educação.\n\nA matrícula não pode ser negada por falta de documentos ou por situação migratória. Leve o que tiver: passaporte, certidão de nascimento, comprovante de residência e histórico escolar." },
        { p: "A partir de que idade a escola é obrigatória?",
          r: "No Brasil, a matrícula é obrigatória dos 4 aos 17 anos. Creches (0 a 3 anos) são opcionais e as vagas costumam ser limitadas." },
        { p: "Preciso de documentos escolares traduzidos?",
          r: "O histórico escolar do exterior ajuda a escola a definir a série do aluno. A escola pode fazer uma avaliação para decidir a série adequada, então não deixe de matricular por falta de tradução." },
        { p: "E a vacinação das crianças?",
          r: "Leve a carteira de vacinação do seu país e vá à unidade de saúde do bairro. Os profissionais verificam quais vacinas faltam e atualizam o calendário brasileiro." },
        { p: "Existem escolas bilíngues ou internacionais?",
          r: "Sim, Curitiba tem escolas particulares bilíngues e internacionais. Compare valores, idiomas oferecidos e se o currículo é aceito no seu país de origem." }
      ]
    }
  };
var ROTULO="Voltar ao menu";
var ABAS=[["inicio","Início"],["cidade","A cidade"],["turismo","Pontos turísticos"],["documentos","Documentos"]];
var CARTOES=[["documentacao","Documentação","CPF, Polícia Federal, SUS","#c8372d"],["habitacao","Habitação","Alugar, bairros, contas","#e3b23c"],["adaptacao","Adaptação","Transporte, clima, idioma","#4f8a6e"],["escola","Escola dos filhos","Matrícula e vacinas","#5b86b5"]];

/* Os arquivos de foto ficam na pasta imagens/. Se não existirem, aparece a ilustração. */
var LUGARES=[
["Jardim Botânico","Natureza","Estufa de vidro e jardins de estilo francês. É o cartão-postal da cidade.","estufa","#bfe3d6","#6fae96","jardim-botanico.jpg"],
["Ópera de Arame","Arquitetura","Teatro de estrutura tubular cercado por mata, dentro de um parque.","opera","#f3d9a0","#d99a5f","opera-de-arame.jpg"],
["Museu Oscar Niemeyer","Arte","O Museu do Olho reúne artes visuais, arquitetura e design.","museu","#cdd9f0","#8fa6d6","museu-oscar-niemeyer.jpg"],
["Parque Barigui","Parque","Grande parque para caminhar e pedalar. É comum ver capivaras no lago.","parque","#d4ecc4","#8cc27a","parque-barigui.jpg"],
["Rua XV de Novembro","Centro","Calçadão do centro, com comércio, cafés e a Rua das Flores.","rua","#f6d0c8","#e08a7a","rua-xv.jpg"],
["Largo da Ordem","História","Centro histórico com casarões, igrejas e feira de artesanato aos domingos.","largo","#efe0c0","#cfa766","largo-da-ordem.jpg"],
["Mercado Municipal","Gastronomia","Para provar frutas, queijos, embutidos e comidas típicas.","mercado","#ffe0a8","#f2b25c","mercado-municipal.jpg"],
["Linha Turismo","Passeio","Ônibus que passa pelos principais pontos, bom para se orientar na cidade.","onibus","#c7e4ef","#7fb7cf","linha-turismo.jpg"]];
var FATOS=[
["Clima","Frio para os padrões brasileiros. O inverno (junho a agosto) pode ter geada, e o tempo muda várias vezes no mesmo dia. Leve casaco e guarda-chuva o ano todo.","#5b86b5"],
["Transporte","Ônibus expressos vermelhos, ônibus de bairro e estações-tubo de vidro. Consulte as formas de pagamento atuais no site da URBS.","#c8372d"],
["Povo e cultura","A cidade foi formada por imigrantes poloneses, ucranianos, alemães, italianos e japoneses. Isso aparece na comida, nas festas e nos memoriais.","#e3b23c"],
["Bairros conhecidos","Centro, Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Portão e Santa Felicidade. Cada um tem um perfil de preço e de rotina diferente.","#4f8a6e"],
["Telefones úteis","190 Polícia Militar, 192 SAMU, 193 Bombeiros e 156 Central da Prefeitura de Curitiba.","#1e4d3b"]];
var PASSOS=[
["Registro na Polícia Federal","Agende pelo site da PF e leve passaporte e os documentos do seu tipo de autorização. Você recebe a Carteira de Registro Nacional Migratório (CRNM). O prazo costuma ser de 90 dias após a entrada, conforme o caso."],
["CPF","Número obrigatório para trabalhar, alugar, abrir conta e usar serviços. Pode ser emitido na Receita Federal, nos Correios e em bancos conveniados."],
["Carteira de Trabalho Digital","Emitida pelo aplicativo, com conta gov.br e CPF. Verifique se sua autorização permite trabalhar."],
["Cartão SUS","Vá à unidade de saúde do seu bairro com documento e comprovante de residência. O atendimento no SUS é aberto também a estrangeiros."],
["Documentos do seu país","Certidões e diplomas costumam precisar de apostila de Haia e tradução juramentada para valer no Brasil."]];

var UI_PT={marca:"Curitiba, bem-vindo",nav:"Seções do guia",idioma:"Idioma",
h1:"Você chegou a Curitiba. Vamos resolver o resto juntos.",
lead:"Um guia simples para os primeiros dias: documentos, moradia, rotina e escola dos filhos. Se tiver dúvida, o assistente no canto da tela responde na hora.",
btn:"Ver passo a passo dos documentos",comece:"Comece por aqui",
cidT:"Conheça a cidade",cidD:"Curitiba é a capital do Paraná, no Sul do Brasil, a cerca de 900 metros de altitude. Tem fama de cidade planejada, cheia de parques e com transporte coletivo organizado.",
turT:"Pontos turísticos",turD:"Lugares bons para conhecer nas primeiras semanas, quase todos acessíveis de transporte público.",
todos:"Todos",filtrar:"Filtrar por categoria",
docT:"Regularização de documentos",docD:"Esta é uma ordem comum de passos. Seu caso pode variar conforme o visto ou a autorização de residência.",
aviso:"Regras mudam. Confirme sempre nos sites oficiais (Polícia Federal, Receita Federal, gov.br) ou ligue para o 156.",
rodape:"Guia informativo. Não substitui orientação dos órgãos oficiais.",
fab:"Tire suas dúvidas",assist:"Assistente de Curitiba",min:"Minimizar",minA:"Minimizar assistente",ph:"Escreva sua dúvida",enviar:"Enviar",voltar:"Voltar ao menu",
intro:"Olá! Eu respondo as dúvidas mais comuns de quem chega a Curitiba. As informações são gerais, então confirme nos órgãos oficiais. Sobre qual assunto você quer saber?",
sobre:"Sobre {t}, qual é a sua dúvida?",claro:"Claro. Sobre qual assunto você quer saber?",
nao:"Não encontrei essa dúvida nas respostas que tenho. Escolha um dos assuntos abaixo ou ligue para 156."};

var I18N={
es:{ui:{marca:"Curitiba te da la bienvenida",nav:"Secciones de la guía",idioma:"Idioma",
h1:"Llegaste a Curitiba. Resolvamos el resto juntos.",
lead:"Una guía sencilla para los primeros días: documentos, vivienda, rutina y escuela de los hijos. Si tienes dudas, el asistente en la esquina de la pantalla responde al instante.",
btn:"Ver el paso a paso de los documentos",comece:"Empieza por aquí",
cidT:"Conoce la ciudad",cidD:"Curitiba es la capital del estado de Paraná, en el sur de Brasil, a unos 900 metros de altitud. Tiene fama de ciudad planificada, llena de parques y con transporte colectivo organizado.",
turT:"Puntos turísticos",turD:"Lugares para conocer en las primeras semanas, casi todos accesibles en transporte público.",
todos:"Todos",filtrar:"Filtrar por categoría",
docT:"Regularización de documentos",docD:"Este es un orden habitual de pasos. Tu caso puede variar según tu visa o autorización de residencia.",
aviso:"Las reglas cambian. Confirma siempre en los sitios oficiales (Polícia Federal, Receita Federal, gov.br) o llama al 156.",
rodape:"Guía informativa. No sustituye la orientación de los organismos oficiales.",
fab:"Resuelve tus dudas",assist:"Asistente de Curitiba",min:"Minimizar",minA:"Minimizar asistente",ph:"Escribe tu duda",enviar:"Enviar",voltar:"Volver al menú",
intro:"¡Hola! Respondo las dudas más comunes de quien llega a Curitiba. La información es general, así que confirma en los organismos oficiales. ¿Sobre qué tema quieres saber?",
sobre:"Sobre {t}: ¿cuál es tu duda?",claro:"Claro. ¿Sobre qué tema quieres saber?",
nao:"No encontré esa duda en las respuestas que tengo. Elige uno de los temas de abajo o llama al 156."},
abas:["Inicio","La ciudad","Puntos turísticos","Documentos"],
cartoes:[["Documentación","CPF, Polícia Federal, SUS"],["Vivienda","Alquilar, barrios, cuentas"],["Adaptación","Transporte, clima, idioma"],["Escuela de los hijos","Matrícula y vacunas"]],
lugares:[["Naturaleza","Invernadero de vidrio y jardines de estilo francés. Es la postal de la ciudad."],["Arquitectura","Teatro de estructura tubular rodeado de bosque, dentro de un parque."],["Arte","El Museo del Ojo reúne artes visuales, arquitectura y diseño."],["Parque","Gran parque para caminar y andar en bici. Es común ver capibaras en el lago."],["Centro","Calle peatonal del centro, con comercios, cafés y la Rua das Flores."],["Historia","Centro histórico con casonas, iglesias y feria de artesanías los domingos."],["Gastronomía","Para probar frutas, quesos, embutidos y comidas típicas."],["Paseo","Autobús que pasa por los principales puntos; sirve para ubicarse en la ciudad."]],
fatos:[["Clima","Frío para los estándares brasileños. El invierno (junio a agosto) puede traer heladas y el tiempo cambia varias veces en el mismo día. Lleva abrigo y paraguas todo el año."],["Transporte","Autobuses expresos rojos, autobuses de barrio y estaciones tubo de vidrio. Consulta las formas de pago vigentes en el sitio de URBS."],["Gente y cultura","La ciudad fue formada por inmigrantes polacos, ucranianos, alemanes, italianos y japoneses. Se nota en la comida, las fiestas y los memoriales."],["Barrios conocidos","Centro, Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Portão y Santa Felicidade. Cada uno tiene un perfil de precio y rutina distinto."],["Teléfonos útiles","190 Policía Militar, 192 SAMU, 193 Bomberos y 156 Central de la Alcaldía de Curitiba."]],
passos:[["Registro en la Policía Federal","Agenda en el sitio de la PF y lleva pasaporte y los documentos de tu tipo de autorización. Recibes la Carteira de Registro Nacional Migratório (CRNM). El plazo suele ser de 90 días desde la entrada, según el caso."],["CPF","Número obligatorio para trabajar, alquilar, abrir una cuenta y usar servicios. Puede emitirse en la Receita Federal, en Correios y en bancos autorizados."],["Carteira de Trabalho Digital","Se emite en la app, con cuenta gov.br y CPF. Verifica si tu autorización permite trabajar."],["Tarjeta SUS","Ve a la unidad de salud de tu barrio con documento y comprobante de domicilio. La atención del SUS también está abierta a extranjeros."],["Documentos de tu país","Los certificados y diplomas suelen requerir apostilla de La Haya y traducción jurada para valer en Brasil."]],
topicos:{
documentacao:{nome:"Documentación",perguntas:[
{p:"¿Cómo regularizo mi situación en la Policía Federal?",r:"Agenda en el sitio de la Policía Federal y ve con pasaporte y los documentos de tu tipo de autorización. Recibes la CRNM (Carteira de Registro Nacional Migratório). El plazo suele ser de 90 días desde la entrada, según el caso.\n\nConfirma la lista exacta de documentos en el sitio de la PF."},
{p:"¿Cómo saco el CPF?",r:"El CPF puede emitirse en la Receita Federal, en Correios y en bancos autorizados, como Banco do Brasil y Caixa. Lleva pasaporte u otro documento de identidad. Algunos canales cobran tasa, así que confirma antes."},
{p:"¿Puedo trabajar? ¿Cómo saco la carteira de trabajo?",r:"Depende de tu autorización de residencia. Si permite trabajar, emite la Carteira de Trabalho Digital en la app, con tu cuenta gov.br y el CPF."},
{p:"¿Cómo uso el sistema de salud (SUS)?",r:"Ve a la unidad de salud de tu barrio con documento y comprobante de domicilio para hacer la Tarjeta SUS. La atención está abierta también a extranjeros.\n\nEn una emergencia, llama al 192 (SAMU)."},
{p:"¿Debo traducir mis documentos?",r:"Los certificados y diplomas del exterior suelen requerir apostilla de La Haya y traducción jurada hecha por un traductor público en Brasil. Pregunta al organismo donde entregarás el documento qué exige."},
{p:"¿Qué teléfonos útiles debo guardar?",r:"190 Policía Militar\n192 SAMU (ambulancia)\n193 Bomberos\n156 Central de la Alcaldía de Curitiba"}]},
habitacao:{nome:"Vivienda",perguntas:[
{p:"¿Cómo alquilo un inmueble?",r:"Puedes alquilar mediante inmobiliaria o directamente con el propietario. Normalmente piden documento de identidad (CRNM o protocolo), CPF y comprobante de ingresos. Lee el contrato con calma y pide ayuda si algo no queda claro."},
{p:"¿Qué son fiador, seguro de fianza y depósito?",r:"Son garantías del alquiler. El fiador es una persona que responde por el contrato. El seguro de fianza se paga durante el contrato. El depósito (caução) es de hasta 3 meses de alquiler. Los extranjeros recién llegados suelen usar seguro de fianza o depósito."},
{p:"¿Qué barrios puedo considerar?",r:"Batel y Bigorrilho son modernos y más caros. Água Verde, Portão y Cabral son residenciales y bien conectados. El Centro tiene mucho transporte y comercio, pero es movido. Revisa los precios actuales en sitios de inmuebles antes de decidir."},
{p:"¿Qué cuentas de la casa pagaré?",r:"En general: alquiler, condominio, agua (Sanepar), luz (Copel), gas e internet. Pregunta en la inmobiliaria cuáles están incluidas y pide el cambio de titularidad de las cuentas."},
{p:"¿Dónde alojarme los primeros días?",r:"Mucha gente empieza con alojamiento temporal, apart-hotel o hostal hasta conocer los barrios. Desconfía de anuncios que piden pago anticipado sin que hayas visto el inmueble ni el contrato."}]},
adaptacao:{nome:"Adaptación",perguntas:[
{p:"¿Cómo funciona el transporte público?",r:"Curitiba tiene autobuses expresos rojos, autobuses de barrio y estaciones tubo de vidrio. Consulta las formas de pago vigentes en el sitio de URBS. Las apps de mapas muestran líneas y horarios en tiempo real."},
{p:"¿Cómo es el clima? ¿Qué debo llevar?",r:"Es frío para los estándares brasileños y el tiempo cambia mucho en el mismo día. El invierno va de junio a agosto y puede haber heladas. Ten abrigo y paraguas todo el año."},
{p:"¿Cómo abro una cuenta bancaria?",r:"En general necesitas documento de identidad (CRNM o protocolo), CPF y comprobante de domicilio. Cada banco tiene sus reglas, así que pregunta antes. El Pix se usa mucho para pagos diarios."},
{p:"¿Dónde aprendo portugués?",r:"Universidades públicas, como la UFPR, y organizaciones sociales suelen ofrecer cursos de portugués para extranjeros, algunos gratuitos. Pregunta también en la Central 156 de la Alcaldía."},
{p:"¿Cómo conozco gente y la ciudad?",r:"Visita parques como Barigui y el Jardim Botânico, la feria del Largo da Ordem los domingos y el Mercado Municipal. Los grupos de extranjeros y los eventos culturales ayudan a crear una red de contactos."}]},
escola:{nome:"Escuela de los hijos",perguntas:[
{p:"¿Cómo matriculo a mis hijos?",r:"La red pública tiene escuelas municipales (educación infantil y primeros años de primaria) y estaduales (últimos años y secundaria). Busca una escuela cerca de casa o la Secretaría de Educación.\n\nNo se puede negar la matrícula por falta de documentos ni por situación migratoria. Lleva lo que tengas: pasaporte, partida de nacimiento, comprobante de domicilio e historial escolar."},
{p:"¿Desde qué edad es obligatoria la escuela?",r:"En Brasil, la matrícula es obligatoria de los 4 a los 17 años. Las guarderías (0 a 3 años) son opcionales y los cupos suelen ser limitados."},
{p:"¿Necesito documentos escolares traducidos?",r:"El historial escolar del exterior ayuda a la escuela a definir el grado del alumno. La escuela puede hacer una evaluación para decidir el grado adecuado, así que no dejes de matricular por falta de traducción."},
{p:"¿Y la vacunación de los niños?",r:"Lleva la cartilla de vacunación de tu país y ve a la unidad de salud del barrio. Los profesionales verifican qué vacunas faltan y actualizan el calendario brasileño."},
{p:"¿Hay escuelas bilingües o internacionales?",r:"Sí, Curitiba tiene escuelas privadas bilingües e internacionales. Compara precios, idiomas ofrecidos y si el currículo es aceptado en tu país de origen."}]}}},

fr:{ui:{marca:"Bienvenue à Curitiba",nav:"Sections du guide",idioma:"Langue",
h1:"Vous êtes arrivé à Curitiba. Réglons le reste ensemble.",
lead:"Un guide simple pour les premiers jours : papiers, logement, quotidien et école des enfants. En cas de doute, l’assistant en bas de l’écran répond tout de suite.",
btn:"Voir les démarches pour les papiers",comece:"Commencez ici",
cidT:"Découvrez la ville",cidD:"Curitiba est la capitale de l’État du Paraná, dans le sud du Brésil, à environ 900 mètres d’altitude. Elle a la réputation d’être une ville planifiée, pleine de parcs et dotée d’un réseau de transport organisé.",
turT:"Sites touristiques",turD:"Des lieux à découvrir durant les premières semaines, presque tous accessibles en transport en commun.",
todos:"Tous",filtrar:"Filtrer par catégorie",
docT:"Régularisation des documents",docD:"Voici un ordre courant des démarches. Votre cas peut varier selon votre visa ou votre titre de séjour.",
aviso:"Les règles changent. Vérifiez toujours sur les sites officiels (Polícia Federal, Receita Federal, gov.br) ou appelez le 156.",
rodape:"Guide informatif. Il ne remplace pas les indications des organismes officiels.",
fab:"Posez vos questions",assist:"Assistant de Curitiba",min:"Réduire",minA:"Réduire l’assistant",ph:"Écrivez votre question",enviar:"Envoyer",voltar:"Retour au menu",
intro:"Bonjour ! Je réponds aux questions les plus courantes de ceux qui arrivent à Curitiba. Les informations sont générales : vérifiez auprès des organismes officiels. Sur quel sujet voulez-vous en savoir plus ?",
sobre:"Concernant {t} : quelle est votre question ?",claro:"Bien sûr. Sur quel sujet voulez-vous en savoir plus ?",
nao:"Je n’ai pas trouvé cette question dans mes réponses. Choisissez un des sujets ci-dessous ou appelez le 156."},
abas:["Accueil","La ville","Sites touristiques","Documents"],
cartoes:[["Documents","CPF, Police fédérale, SUS"],["Logement","Louer, quartiers, factures"],["Adaptation","Transport, climat, langue"],["École des enfants","Inscription et vaccins"]],
lugares:[["Nature","Serre en verre et jardins à la française. C’est la carte postale de la ville."],["Architecture","Théâtre à structure tubulaire entouré de forêt, dans un parc."],["Art","Le Musée de l’Œil réunit arts visuels, architecture et design."],["Parc","Grand parc pour marcher et faire du vélo. On y voit souvent des capybaras sur le lac."],["Centre","Rue piétonne du centre, avec commerces, cafés et la Rua das Flores."],["Histoire","Centre historique avec maisons anciennes, églises et marché d’artisanat le dimanche."],["Gastronomie","Pour goûter fruits, fromages, charcuteries et plats typiques."],["Balade","Bus qui dessert les principaux sites, utile pour se repérer dans la ville."]],
fatos:[["Climat","Froid pour le Brésil. L’hiver (juin à août) peut apporter du givre, et le temps change plusieurs fois dans la journée. Prévoyez manteau et parapluie toute l’année."],["Transport","Bus express rouges, bus de quartier et stations-tubes en verre. Consultez les modes de paiement actuels sur le site de l’URBS."],["Peuple et culture","La ville a été formée par des immigrants polonais, ukrainiens, allemands, italiens et japonais. Cela se voit dans la cuisine, les fêtes et les mémoriaux."],["Quartiers connus","Centro, Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Portão et Santa Felicidade. Chacun a son profil de prix et de quotidien."],["Numéros utiles","190 Police militaire, 192 SAMU, 193 Pompiers et 156 Centrale de la mairie de Curitiba."]],
passos:[["Enregistrement à la Police fédérale","Prenez rendez-vous sur le site de la PF et apportez passeport et pièces liées à votre type d’autorisation. Vous recevez la Carteira de Registro Nacional Migratório (CRNM). Le délai est généralement de 90 jours après l’entrée, selon le cas."],["CPF","Numéro obligatoire pour travailler, louer, ouvrir un compte et utiliser les services. Il peut être délivré à la Receita Federal, aux Correios et dans des banques agréées."],["Carte de travail numérique","Délivrée via l’appli, avec un compte gov.br et le CPF. Vérifiez si votre autorisation permet de travailler."],["Carte SUS","Rendez-vous à l’unité de santé de votre quartier avec une pièce d’identité et un justificatif de domicile. Le SUS est aussi ouvert aux étrangers."],["Documents de votre pays","Actes et diplômes exigent souvent l’apostille de La Haye et une traduction assermentée pour être valables au Brésil."]],
topicos:{
documentacao:{nome:"Documents",perguntas:[
{p:"Comment régulariser ma situation à la Police fédérale ?",r:"Prenez rendez-vous sur le site de la Police fédérale et présentez-vous avec votre passeport et les pièces liées à votre type d’autorisation. Vous recevez la CRNM (Carteira de Registro Nacional Migratório). Le délai est généralement de 90 jours après l’entrée, selon le cas.\n\nVérifiez la liste exacte des pièces sur le site de la PF."},
{p:"Comment obtenir le CPF ?",r:"Le CPF peut être délivré à la Receita Federal, aux Correios et dans des banques agréées, comme Banco do Brasil et Caixa. Apportez votre passeport ou une autre pièce d’identité. Certains canaux facturent des frais, vérifiez avant."},
{p:"Puis-je travailler ? Comment obtenir la carte de travail ?",r:"Cela dépend de votre titre de séjour. S’il autorise le travail, demandez la Carteira de Trabalho Digital dans l’appli, avec votre compte gov.br et le CPF."},
{p:"Comment utiliser le système de santé (SUS) ?",r:"Rendez-vous à l’unité de santé de votre quartier avec une pièce d’identité et un justificatif de domicile pour obtenir la carte SUS. Les soins sont ouverts aussi aux étrangers.\n\nEn cas d’urgence, appelez le 192 (SAMU)."},
{p:"Dois-je traduire mes documents ?",r:"Les actes et diplômes étrangers exigent souvent l’apostille de La Haye et une traduction assermentée par un traducteur public au Brésil. Demandez à l’organisme qui recevra le document ce qu’il exige."},
{p:"Quels numéros utiles enregistrer ?",r:"190 Police militaire\n192 SAMU (ambulance)\n193 Pompiers\n156 Centrale de la mairie de Curitiba"}]},
habitacao:{nome:"Logement",perguntas:[
{p:"Comment louer un bien ?",r:"Vous pouvez louer via une agence ou directement avec le propriétaire. On demande en général une pièce d’identité (CRNM ou récépissé), le CPF et un justificatif de revenus. Lisez le contrat avec soin et demandez de l’aide si quelque chose n’est pas clair."},
{p:"Qu’est-ce que le garant, l’assurance-caution et le dépôt ?",r:"Ce sont des garanties de loyer. Le garant est une personne qui répond du contrat. L’assurance-caution se paie pendant le bail. Le dépôt (caução) peut aller jusqu’à 3 mois de loyer. Les étrangers récemment arrivés utilisent souvent l’assurance-caution ou le dépôt."},
{p:"Quels quartiers envisager ?",r:"Batel et Bigorrilho sont modernes et plus chers. Água Verde, Portão et Cabral sont résidentiels et bien desservis. Le Centro a beaucoup de transports et de commerces, mais il est animé. Vérifiez les prix actuels sur les sites d’annonces avant de décider."},
{p:"Quelles factures vais-je payer ?",r:"En général : loyer, charges de copropriété, eau (Sanepar), électricité (Copel), gaz et internet. Demandez à l’agence lesquelles sont incluses et faites transférer les contrats à votre nom."},
{p:"Où loger les premiers jours ?",r:"Beaucoup commencent par une location de courte durée, un apart-hôtel ou une auberge, le temps de connaître les quartiers. Méfiez-vous des annonces qui demandent un paiement à l’avance sans que vous ayez vu le bien ni le contrat."}]},
adaptacao:{nome:"Adaptation",perguntas:[
{p:"Comment fonctionnent les transports en commun ?",r:"Curitiba a des bus express rouges, des bus de quartier et des stations-tubes en verre. Consultez les modes de paiement actuels sur le site de l’URBS. Les applis de cartes montrent lignes et horaires en temps réel."},
{p:"Quel est le climat ? Que prévoir ?",r:"Il fait froid pour le Brésil et le temps change beaucoup dans la journée. L’hiver va de juin à août et peut apporter du givre. Ayez un manteau et un parapluie toute l’année."},
{p:"Comment ouvrir un compte bancaire ?",r:"En général, il faut une pièce d’identité (CRNM ou récépissé), le CPF et un justificatif de domicile. Chaque banque a ses règles, renseignez-vous avant. Le Pix est très utilisé pour les paiements courants."},
{p:"Où apprendre le portugais ?",r:"Les universités publiques, comme l’UFPR, et des associations proposent souvent des cours de portugais pour étrangers, certains gratuits. Renseignez-vous aussi au 156 de la mairie."},
{p:"Comment rencontrer des gens et découvrir la ville ?",r:"Visitez des parcs comme Barigui et le Jardim Botânico, le marché du Largo da Ordem le dimanche et le Mercado Municipal. Les groupes d’étrangers et les événements culturels aident à se faire un réseau."}]},
escola:{nome:"École des enfants",perguntas:[
{p:"Comment inscrire mes enfants ?",r:"Le réseau public compte des écoles municipales (maternelle et premières années du primaire) et d’État (dernières années et lycée). Cherchez une école près de chez vous ou contactez le Secrétariat à l’Éducation.\n\nL’inscription ne peut pas être refusée pour manque de documents ou situation migratoire. Apportez ce que vous avez : passeport, acte de naissance, justificatif de domicile et dossier scolaire."},
{p:"À partir de quel âge l’école est-elle obligatoire ?",r:"Au Brésil, l’inscription est obligatoire de 4 à 17 ans. Les crèches (0 à 3 ans) sont facultatives et les places souvent limitées."},
{p:"Faut-il traduire les documents scolaires ?",r:"Le dossier scolaire étranger aide l’école à déterminer la classe de l’élève. L’école peut faire une évaluation pour choisir la classe adaptée, n’attendez donc pas la traduction pour inscrire."},
{p:"Et la vaccination des enfants ?",r:"Apportez le carnet de vaccination de votre pays et allez à l’unité de santé du quartier. Les professionnels vérifient les vaccins manquants et mettent à jour le calendrier brésilien."},
{p:"Existe-t-il des écoles bilingues ou internationales ?",r:"Oui, Curitiba compte des écoles privées bilingues et internationales. Comparez les tarifs, les langues proposées et si le programme est reconnu dans votre pays d’origine."}]}}},

en:{ui:{marca:"Welcome to Curitiba",nav:"Guide sections",idioma:"Language",
h1:"You’ve arrived in Curitiba. Let’s sort out the rest together.",
lead:"A simple guide for your first days: documents, housing, daily life and your children’s schooling. If you have a question, the assistant at the corner of the screen answers right away.",
btn:"See the step-by-step for documents",comece:"Start here",
cidT:"Get to know the city",cidD:"Curitiba is the capital of Paraná state in southern Brazil, about 900 meters above sea level. It’s known as a planned city, full of parks, with an organized public transport system.",
turT:"Tourist spots",turD:"Places worth seeing in your first weeks, almost all reachable by public transport.",
todos:"All",filtrar:"Filter by category",
docT:"Getting your documents in order",docD:"This is a common order of steps. Your case may vary depending on your visa or residence permit.",
aviso:"Rules change. Always confirm on official websites (Polícia Federal, Receita Federal, gov.br) or call 156.",
rodape:"Informational guide. It does not replace guidance from official agencies.",
fab:"Ask your questions",assist:"Curitiba Assistant",min:"Minimize",minA:"Minimize assistant",ph:"Type your question",enviar:"Send",voltar:"Back to menu",
intro:"Hi! I answer the most common questions from people arriving in Curitiba. The information is general, so please confirm with official agencies. What would you like to know about?",
sobre:"About {t}: what is your question?",claro:"Of course. What would you like to know about?",
nao:"I couldn’t find that question in my answers. Pick one of the topics below or call 156."},
abas:["Home","The city","Tourist spots","Documents"],
cartoes:[["Documents","CPF, Federal Police, SUS"],["Housing","Renting, neighborhoods, bills"],["Settling in","Transport, weather, language"],["Kids’ school","Enrollment and vaccines"]],
lugares:[["Nature","Glass greenhouse and French-style gardens. It’s the city’s postcard."],["Architecture","Tube-framed theater surrounded by forest, inside a park."],["Art","The “Eye Museum” brings together visual arts, architecture and design."],["Park","Large park for walking and cycling. Capybaras are often seen by the lake."],["Downtown","Pedestrian street downtown, with shops, cafés and the Rua das Flores."],["History","Historic center with old houses, churches and a Sunday craft fair."],["Food","A place to try fruit, cheese, cured meats and local dishes."],["Sightseeing","A bus that passes the main sights, handy for getting your bearings."]],
fatos:[["Weather","Cold by Brazilian standards. Winter (June to August) can bring frost, and the weather can change several times a day. Bring a coat and umbrella all year."],["Transport","Red express buses, neighborhood buses and glass tube stations. Check current payment methods on the URBS website."],["People and culture","The city was shaped by Polish, Ukrainian, German, Italian and Japanese immigrants. You can see it in the food, festivals and memorials."],["Well-known neighborhoods","Centro, Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Portão and Santa Felicidade. Each has a different price and lifestyle profile."],["Useful numbers","190 Military Police, 192 SAMU, 193 Fire Department and 156 Curitiba City Hall hotline."]],
passos:[["Registration with the Federal Police","Book on the PF website and bring your passport and the documents for your type of permit. You receive the National Migration Registry card (CRNM). The deadline is usually 90 days after entry, depending on your case."],["CPF","A required number to work, rent, open an account and use services. It can be issued at the Receita Federal, at Correios and at authorized banks."],["Digital work card","Issued in the app with a gov.br account and your CPF. Check whether your permit allows you to work."],["SUS card","Go to your neighborhood health unit with an ID and proof of address. SUS care is open to foreigners too."],["Documents from your country","Certificates and diplomas usually need a Hague apostille and a sworn translation to be valid in Brazil."]],
topicos:{
documentacao:{nome:"Documents",perguntas:[
{p:"How do I regularize my status with the Federal Police?",r:"Book an appointment on the Federal Police website and go with your passport and the documents for your type of permit. You receive the CRNM (Carteira de Registro Nacional Migratório). The deadline is usually 90 days after entry, depending on your case.\n\nCheck the exact document list on the PF website."},
{p:"How do I get a CPF?",r:"The CPF can be issued at the Receita Federal, at Correios post offices and at authorized banks such as Banco do Brasil and Caixa. Bring your passport or another ID. Some channels charge a fee, so check first."},
{p:"Can I work? How do I get a work card?",r:"It depends on your residence permit. If it allows work, get the digital work card (Carteira de Trabalho Digital) in the app, using your gov.br account and CPF."},
{p:"How do I use the health system (SUS)?",r:"Go to your neighborhood health unit with an ID and proof of address to get the SUS card. Care is open to foreigners too.\n\nIn an emergency, call 192 (SAMU)."},
{p:"Do I need to translate my documents?",r:"Foreign certificates and diplomas usually need a Hague apostille and a sworn translation by a public translator in Brazil. Ask the agency receiving the document what it requires."},
{p:"Which useful phone numbers should I save?",r:"190 Military Police\n192 SAMU (ambulance)\n193 Fire Department\n156 Curitiba City Hall hotline"}]},
habitacao:{nome:"Housing",perguntas:[
{p:"How do I rent a place?",r:"You can rent through a real estate agency or directly from the owner. They usually ask for an ID (CRNM or receipt), CPF and proof of income. Read the contract carefully and ask for help if something is unclear."},
{p:"What are a guarantor, rental insurance and a deposit?",r:"They are rental guarantees. A guarantor is a person who answers for the contract. Rental insurance is paid throughout the lease. A deposit (caução) is up to 3 months’ rent. Newly arrived foreigners often use rental insurance or a deposit."},
{p:"Which neighborhoods should I consider?",r:"Batel and Bigorrilho are modern and pricier. Água Verde, Portão and Cabral are residential and well connected. Centro has lots of transport and shops but is busy. Check current prices on property sites before deciding."},
{p:"Which household bills will I pay?",r:"Usually: rent, building fees, water (Sanepar), electricity (Copel), gas and internet. Ask the agency which are included and have the accounts moved into your name."},
{p:"Where can I stay in my first days?",r:"Many people start with short-term rentals, an aparthotel or a hostel until they know the neighborhoods. Be wary of listings that ask for advance payment before you have seen the place or the contract."}]},
adaptacao:{nome:"Settling in",perguntas:[
{p:"How does public transport work?",r:"Curitiba has red express buses, neighborhood buses and glass tube stations. Check current payment methods on the URBS website. Map apps show lines and times in real time."},
{p:"What is the weather like? What should I bring?",r:"It is cold by Brazilian standards and the weather changes a lot during the day. Winter runs from June to August and can bring frost. Keep a coat and umbrella handy all year."},
{p:"How do I open a bank account?",r:"You generally need an ID (CRNM or receipt), CPF and proof of address. Each bank has its own rules, so ask first. Pix is widely used for everyday payments."},
{p:"Where can I learn Portuguese?",r:"Public universities, such as UFPR, and social organizations often offer Portuguese courses for foreigners, some free. You can also ask at the City Hall hotline, 156."},
{p:"How do I meet people and get to know the city?",r:"Visit parks like Barigui and the Botanical Garden, the Sunday fair at Largo da Ordem and the Municipal Market. Foreigner groups and cultural events help build a network."}]},
escola:{nome:"Kids’ school",perguntas:[
{p:"How do I enroll my children?",r:"The public network has municipal schools (kindergarten and early primary) and state schools (later primary and high school). Look for a school near home or contact the Education Department.\n\nEnrollment cannot be refused for missing documents or immigration status. Bring what you have: passport, birth certificate, proof of address and school records."},
{p:"From what age is school mandatory?",r:"In Brazil, enrollment is mandatory from ages 4 to 17. Daycare (ages 0 to 3) is optional and places are often limited."},
{p:"Do I need translated school records?",r:"School records from abroad help the school decide the student’s grade. The school may run an assessment to place the child, so do not delay enrollment for lack of a translation."},
{p:"What about the children’s vaccinations?",r:"Bring your country’s vaccination record and go to the neighborhood health unit. Staff check which vaccines are missing and update the Brazilian schedule."},
{p:"Are there bilingual or international schools?",r:"Yes, Curitiba has private bilingual and international schools. Compare fees, languages offered and whether the curriculum is accepted in your home country."}]}}}
};

function dadosBase(lg){
  var x=I18N[lg];
  if(!x){return {ui:UI_PT,abas:ABAS,cartoes:CARTOES,lugares:LUGARES,fatos:FATOS,passos:PASSOS,topicos:TOPICOS};}
  return {ui:x.ui,
    abas:ABAS.map(function(a,i){return [a[0],x.abas[i]];}),
    cartoes:CARTOES.map(function(c,i){return [c[0],x.cartoes[i][0],x.cartoes[i][1],c[3]];}),
    lugares:LUGARES.map(function(l,i){return [l[0],x.lugares[i][0],x.lugares[i][1],l[3],l[4],l[5],l[6]];}),
    fatos:FATOS.map(function(f,i){return [x.fatos[i][0],x.fatos[i][1],f[2]];}),
    passos:x.passos,topicos:x.topicos};
}

var EXTRA={
pt:{feito:"Já fiz este passo",prog:"{n} de {m} passos concluídos. Seu progresso fica salvo neste aparelho.",lembT:"Lembrete do prazo",lembD:"Informe a data de entrada no Brasil e baixe um lembrete para o seu calendário, 90 dias depois. Confirme o prazo do seu caso na Polícia Federal.",dataL:"Data de entrada no Brasil",lembB:"Baixar lembrete",icsT:"Prazo de registro na Polícia Federal (confirme o seu prazo)",icsD:"Agende e confirme os documentos no site da Polícia Federal.",fbL:"Informação errada ou desatualizada?",fbT:"Conte o que encontrou. Vamos revisar.",fbP:"Escreva aqui. Não envie dados pessoais, como CPF ou passaporte.",fbS:"Enviar",fbOk:"Obrigado! Vamos revisar.",fbErr:"Não foi possível enviar agora. Tente de novo mais tarde.",fbX:"Fechar"},
es:{feito:"Ya hice este paso",prog:"{n} de {m} pasos completados. Tu progreso se guarda en este dispositivo.",lembT:"Recordatorio del plazo",lembD:"Indica la fecha de entrada a Brasil y descarga un recordatorio para tu calendario, 90 días después. Confirma el plazo de tu caso en la Polícia Federal.",dataL:"Fecha de entrada a Brasil",lembB:"Descargar recordatorio",icsT:"Plazo de registro en la Polícia Federal (confirma el tuyo)",icsD:"Agenda y confirma los documentos en el sitio de la Polícia Federal.",fbL:"¿Información errónea o desactualizada?",fbT:"Cuéntanos qué encontraste. Lo revisaremos.",fbP:"Escribe aquí. No envíes datos personales, como CPF o pasaporte.",fbS:"Enviar",fbOk:"¡Gracias! Lo revisaremos.",fbErr:"No se pudo enviar ahora. Inténtalo más tarde.",fbX:"Cerrar"},
fr:{feito:"J’ai fait cette étape",prog:"{n} étapes sur {m} terminées. Votre progression est enregistrée sur cet appareil.",lembT:"Rappel du délai",lembD:"Indiquez votre date d’entrée au Brésil et téléchargez un rappel pour votre calendrier, 90 jours plus tard. Vérifiez le délai de votre cas auprès de la Police fédérale.",dataL:"Date d’entrée au Brésil",lembB:"Télécharger le rappel",icsT:"Délai d’enregistrement à la Police fédérale (vérifiez le vôtre)",icsD:"Prenez rendez-vous et vérifiez les pièces sur le site de la Police fédérale.",fbL:"Information erronée ou périmée ?",fbT:"Dites-nous ce que vous avez trouvé. Nous vérifierons.",fbP:"Écrivez ici. N’envoyez pas de données personnelles, comme le CPF ou le passeport.",fbS:"Envoyer",fbOk:"Merci ! Nous allons vérifier.",fbErr:"Envoi impossible pour le moment. Réessayez plus tard.",fbX:"Fermer"},
en:{feito:"I’ve done this step",prog:"{n} of {m} steps completed. Your progress is saved on this device.",lembT:"Deadline reminder",lembD:"Enter your date of arrival in Brazil and download a calendar reminder for 90 days later. Confirm the deadline for your case with the Federal Police.",dataL:"Date of arrival in Brazil",lembB:"Download reminder",icsT:"Federal Police registration deadline (confirm yours)",icsD:"Book and confirm the documents on the Federal Police website.",fbL:"Wrong or outdated information?",fbT:"Tell us what you found. We’ll review it.",fbP:"Write here. Do not send personal data, such as CPF or passport.",fbS:"Send",fbOk:"Thank you! We’ll review it.",fbErr:"Couldn’t send right now. Please try again later.",fbX:"Close"}};

/* Textos novos do visual e do chatbot (sobrescrevem os de mesmo nome acima). */
var NOVO={
pt:{h1:"Bem-vindo a Curitiba. Vamos começar juntos.",lead:"Tudo o que você precisa para começar: documentos, moradia, escola dos filhos e a vida na cidade. Em linguagem simples.",btn:"Ver o passo a passo dos documentos",btn2:"Falar com o assistente",ajuda:"Como podemos ajudar?",ajudaD:"Escolha um assunto. O assistente responde em poucos segundos.",primeiros:"Seus primeiros passos",chatSub:"Respostas rápidas para quem acabou de chegar",emerg:"Emergência: 190 Polícia, 192 Ambulância, 193 Bombeiros",outras:"Mais perguntas sobre este assunto",menu:"Outro assunto",parecido:"Não achei uma resposta exata. Alguma destas perguntas ajuda?",irDoc:"Abrir o passo a passo dos documentos",irCid:"Ver a seção sobre a cidade",novo:"Nova conversa",dig:"Digitando",fab:"Precisa de ajuda?",intro:"Olá! Sou o assistente do guia. Escolha um assunto ou escreva sua pergunta.",sobre:"Sobre {t}. Qual é a sua pergunta?"},
es:{h1:"Bienvenido a Curitiba. Empecemos juntos.",lead:"Todo lo que necesitas para empezar: documentos, vivienda, escuela de tus hijos y la vida en la ciudad. En lenguaje sencillo.",btn:"Ver el paso a paso de los documentos",btn2:"Hablar con el asistente",ajuda:"¿Cómo podemos ayudarte?",ajudaD:"Elige un tema. El asistente responde en pocos segundos.",primeiros:"Tus primeros pasos",chatSub:"Respuestas rápidas para quien acaba de llegar",emerg:"Emergencia: 190 Policía, 192 Ambulancia, 193 Bomberos",outras:"Más preguntas sobre este tema",menu:"Otro tema",parecido:"No encontré una respuesta exacta. ¿Te sirve alguna de estas preguntas?",irDoc:"Abrir el paso a paso de los documentos",irCid:"Ver la sección sobre la ciudad",novo:"Nueva conversación",dig:"Escribiendo",fab:"¿Necesitas ayuda?",intro:"¡Hola! Soy el asistente de la guía. Elige un tema o escribe tu pregunta.",sobre:"Sobre {t}. ¿Cuál es tu pregunta?"},
fr:{h1:"Bienvenue à Curitiba. Commençons ensemble.",lead:"Tout ce qu’il faut pour bien démarrer : papiers, logement, école des enfants et vie en ville. En langage simple.",btn:"Voir les démarches pour les papiers",btn2:"Parler à l’assistant",ajuda:"Comment pouvons-nous vous aider ?",ajudaD:"Choisissez un sujet. L’assistant répond en quelques secondes.",primeiros:"Vos premiers pas",chatSub:"Réponses rapides pour les nouveaux arrivants",emerg:"Urgence : 190 Police, 192 Ambulance, 193 Pompiers",outras:"Autres questions sur ce sujet",menu:"Autre sujet",parecido:"Je n’ai pas de réponse exacte. L’une de ces questions peut-elle aider ?",irDoc:"Ouvrir les démarches pour les papiers",irCid:"Voir la section sur la ville",novo:"Nouvelle conversation",dig:"En train d’écrire",fab:"Besoin d’aide ?",intro:"Bonjour ! Je suis l’assistant du guide. Choisissez un sujet ou écrivez votre question.",sobre:"À propos de {t}. Quelle est votre question ?"},
en:{h1:"Welcome to Curitiba. Let’s get started.",lead:"Everything you need to settle in: documents, housing, your children’s school and life in the city. In plain language.",btn:"See the step-by-step for documents",btn2:"Talk to the assistant",ajuda:"How can we help?",ajudaD:"Pick a topic. The assistant answers in a few seconds.",primeiros:"Your first steps",chatSub:"Quick answers for people who just arrived",emerg:"Emergency: 190 Police, 192 Ambulance, 193 Fire",outras:"More questions on this topic",menu:"Another topic",parecido:"I couldn’t find an exact answer. Does one of these questions help?",irDoc:"Open the documents step-by-step",irCid:"See the section about the city",novo:"New chat",dig:"Typing",fab:"Need help?",intro:"Hi! I’m the guide’s assistant. Pick a topic or type your question.",sobre:"About {t}. What is your question?"}
};
