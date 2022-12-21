import { SaucerItem } from "../../types/response.types"

export const url = '/saucers'

export const resources: SaucerItem[] = [
  {
    id: 1,
    name: "Asado argentino",
    country: "Argentina",
    region: "",
    ingredients: [
      "chorizo",
      "morcilla",
      "vacío",
      "asado de tira",
      "papa",
      "cebolla",
      "ajo",
      "tomate",
      "condimentos"
    ],
    recipe: "Encendé la parrilla y dejala calentar bien. Mientras tanto, prepará las verduras: cortá las cebollas en rodajas gruesas, las papas en cubos y el tomate en rodajas. Colocá la carne en la parrilla y cocinála a fuego medio hasta que esté bien cocida. Colocá las verduras en la parrilla y cocinálas a fuego medio también. Una vez que la carne y las verduras estén listas, serví en un plato y disfrutá del asado argentino."
    ,
    otherNames: ["parrilla", "churrasco"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "El asado argentino es una tradición que se remonta a la época de la colonización del país por parte de los españoles. Desde entonces, el asado se ha convertido en una parte fundamental de la cultura y la gastronomía argentina. Se suele preparar en faa o entre amigos y se comparte en una reunión llamada 'asado'. La carne se cocina a fuego lento y se sirve con verduras y una buena salsa.",
    punctuation: 4.8,
    nutritionalInformation: {
      calories: 600,
      fats: 45,
      carbohydrates: 20,
      protein: 35,
      sodium: 900,
      fiber: 3
    },
    necessaryUtensils: [
      "parrilla",
      "cuchillo",
      "tenedor",
      "pinzas"
    ]
  },
  {
    id: 2,
    name: "Empanadas argentinas",
    country: "Argentina",
    region: "",
    ingredients: [
      "harina de trigo",
      "agua",
      "aceite",
      "sal",
      "carne picada",
      "cebolla",
      "ajo",
      "papa",
      "condimentos"
    ],
    recipe: "En un recipiente, mezclá la harina con el agua, el aceite y la sal hasta que forme una masa suave y homogénea. Dejá reposar la masa por unos 30 minutos. Mientras tanto, prepará el relleno: en una sartén, cociná la carne picada con la cebolla y el ajo hasta que esté bien cocida. Añadí la papa picada y cociná todo junto por unos minutos más.Sazoná el relleno gusto. Precalentá el horno a 180°C. Con la ayuda de un rodillo, estirá la masa y cortála en círculos del tamaño deseado. Colocá un poco de relleno en el centro de cada círculo y doblá la masa por la mitad para formar un semicírculo. Prensá los bordes con un tenedor para sellar la empanada. Colocá las empanadas en una bandeja engrasada y hornélas por unos 20 minutos o hasta que estén dorada. Serví calientes y disfrutá de las empanadas argentinas.",
    otherNames: ["empanadillas", "empanadas de carne"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "Las empanadas son un platillo tradicional de la cocina latinoamericana y su origen se remonta a la época de la colonización española. En Argentina, las empanadas se han convertido en uno de los platillos más populares y se pueden encontrar en casi cualquier lugar del país. Se preparan de diferentes maneras y con distintos tipos de relleno, pero siempre se caracterizan por su masa crujiente y su delicioso sabor.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 600,
      fats: 40,
      carbohydrates: 15,
      protein: 50,
      sodium: 1000,
      fiber: 5
    },
    necessaryUtensils: [
      "parrilla",
      "carbón o leña",
      "cuchillo",
      "tenedor",
      "pinzas"
    ]
  },
  {
    id: 3,
    name: "Choripán",
    country: "Argentina",
    region: "",
    ingredients: [
      "chorizo",
      "pan de molde"
    ],
    recipe: "Precalentá la parrilla a fuego medio. Cortá el chorizo en rodajas delgadas y colocálas en la parrilla. Cociná el chorizo por unos 5 minutos por lado, o hasta que esté bien cocido y crujiente por fuera. Calentá el pan de molde en la parrilla durante unos minutos, hasta que esté ligeramente tostado. Colocá una porción de chorizo en el pan de molde y serví caliente. Acompañá el choripán con una ensalada o con una salsa al gusto.",
    otherNames: ["choripan", "choripan con pan"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "El choripán es un platillo típico de Argentina que se originó en la región pampeana del país. Consiste en un chorizo cocido en la parrilla y servido en un pan de molde. Es una comida rápida y fácil de preparar, ideal para compartir en una reunión entre amigos o en un evento al aire libre. Aunque su origen es argentino, el choripán se ha popularizado en otros países de Sudamérica y se puede encontrar en distintas variantes.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 300,
      fats: 25,
      carbohydrates: 15,
      protein: 20,
      sodium: 500,
      fiber: 2
    },
    necessaryUtensils: [
      "parrilla",
      "carbón o leña",
      "cuchillo",
      "tenedor",
      "pinzas",
      "pan de molde"
    ]
  },
  {
    id: 4,
    name: "Milanesa napolitana",
    country: "Argentina",
    region: "",
    ingredients: [
      "filete de carne",
      "huevo",
      "pan rallado",
      "queso rallado",
      "tomate",
      "jamón",
      "aceitunas negras",
      "orégano",
      "ajo en polvo",
      "aceite de oliva"
    ],
    recipe: "Poné a calentar una sartén con un poco de aceite de oliva. Pasá el filete de carne por huevo batido y luego por pan rallado. Colocá la carne en la sartén caliente y cocinála por unos 3-4 minutos por cada lado, o hasta que esté bien cocida por dentro. Colocá la carne en una fuente para horno y cubrí con una capa de queso rallado. Añadí rodajas de tomate, jamón y aceitunas negras por encima del queso. Espolvoreá orégano y ajo en polvo por encima de la carne y las verduras. Horné la milanesa napolitana por unos 10-15 minutos, o hasta que el queso esté bien derretido y dorado. Serví caliente y disfrutá de esta deliciosa y tradicional receta argentina.",
    otherNames: ["milanesa a la napolitana", "milanesa a la parmesana"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5,
    },
    history: "La milanesa napolitana es una variante de la milanesa tradicional que se caracteriza por su capa de queso y verduras por encima. Se originó en Argentina y se popularizó en otros países de América Latina. Se prepara con un filete de carne, que se pasa por huevo y pan rallado y luego se fríe en una sartén. Luego, se cubre con queso rallado, tomate, jamón y aceitunas y se hornea hasta que el queso esté derretido y dorado.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 35,
      carbohydrates: 15,
      protein: 30,
      sodium: 800,
      fiber: 3
    },
    necessaryUtensils: [
      "sartén",
      "fuente para horno",
      "tenedor",
      "cuchillo",
      "plato hondo",
      "plato plano",
      "mortero"
    ]
  },
  {
    id: 5,
    name: "Churrasco",
    country: "Argentina",
    region: "",
    ingredients: [
      "filete de carne",
      "sal",
      "pimienta",
      "ajo en polvo",
      "aceite de oliva"
    ],
    recipe: "Precalentá la parrilla a fuego medio-alto. Cortá el filete de carne en trozos del tamaño deseado y colocálos en un plato hondo. Mezclá sal, pimienta y ajo en polvo en un mortero y machacá hasta formar una pasta. Espolvoreá la pasta sobre la carne y masajé bien para que se adhiera bien. Colocá la carne en la parrilla caliente y cocinála por unos 3-4 minutos por cada lado, o hasta que esté bien cocida por dentro. Serví caliente y disfrutá de esta deliciosa y tradicional receta argentina.",
    otherNames: ["bife de chorizo", "asado"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5,
    },
    history: "El churrasco es un platillo típico de Argentina que se originó en la región pampeana del país. Consiste en un filete de carne, que se cocina a la parrilla y se sirve caliente. El churrasco se prepara con una técnica especial llamada 'asado', que consiste en cocinar la carne sobre brasas de leña o carbón de manera lenta y constante. Esto permite que la carne se cocine por igual por dentro y por fuera, y que se desarrolle un sabor único y delicioso.",
    punctuation: 4.8,
    nutritionalInformation: {
      calories: 400,
      fats: 30,
      carbohydrates: 5,
      protein: 25,
      sodium: 800,
      fiber: 2
    },
    necessaryUtensils: [
      "parrilla",
      "plato hondo",
      "mortero",
      "tenedor",
      "cuchillo",
      "plato plano"
    ]
  },
  {
    id: 6,
    name: "Dulce de leche",
    country: "Argentina",
    region: "Buenos Aires",
    ingredients: [
      "leche",
      "azúcar",
      "sal"
    ],
    recipe: "1. En una olla grande, mezcla la leche, el azúcar y la sal. 2. Cocina a fuego medio, revolviendo constantemente, hasta que el azúcar se haya disuelto y el dulce de leche comience a espesar. 3. Sigue cocinando, revolviendo constantemente, hasta que el dulce de leche haya alcanzado la consistencia deseada. 4. Retira del fuego y deja enfriar. 5. Sirve frío o a temperatura ambiente.",
    otherNames: ["Cajeta", "Arequipe", "Manjar"],
    cookingTime: {
      minTime: 2,
      maxTime: 3
    },
    history: "El dulce de leche es un postre tradicional de Argentina y otros países de América Latina. Se cree que tiene sus raíces en la época de la colonización española, cuando se introdujo la leche condensada en la región. Aunque hay muchas teorías sobre su origen, lo cierto es que hoy en día el dulce de leche es uno de los postres más populares y queridos de Argentina.",
    punctuation: 5,
    nutritionalInformation: {
      calories: 250,
      fats: 8,
      carbohydrates: 41,
      protein: 7,
      sodium: 75,
      fiber: 0
    },
    necessaryUtensils: ["olla grande", "cuchara de madera"]
  },
  {
    id: 7,
    name: "Alfajores",
    country: "Argentina",
    region: "Buenos Aires",
    ingredients: [
      "harina",
      "azúcar",
      "maicena",
      "manteca",
      "huevos",
      "polvo de hornear",
      "esencia de vainilla"
    ],
    recipe: "1. Precalienta el horno a 180°C (350°F). 2. En un tazón grande, mezcla la harina, la maicena, el polvo de hornear y la sal. 3. En otro tazón, bate la manteca y el azúcar hasta que quede suave. Agrega los huevos, uno a uno, batiendo bien después de cada adición. Agrega la esencia de vainilla y mezcla bien. 4. Agrega la mezcla de harina a la mezcla de manteca y huevos y mezcla bien hasta obtener una masa suave. 5. Coloca la masa entre dos hojas de papel encerado y estira hasta que tenga un grosor de aproximadamente 1/4 de pulgada. Usa cortadores de galleta para cortar la masa en forma de círculos. 6. Coloca los círculos de masa en una bandeja para hornear engrasada y hornea durante 10-12 minutos, o hasta que estén dorados. Deja enfriar completamente. 7. Mientras tanto, prepara la cobertura derritiendo el chocolate en un tazón al baño María o en el microondas. 8. Una vez que los círculos de masa estén fríos, coloca una cucharada de dulce de leche en el centro de cada uno y cubre con otro círculo de masa. Cubre los alfajores con la cobertura de chocolate derretido y deja enfriar hasta que el chocolate esté sólido.",
    otherNames: ["Alfájores", "Alfajor"],
    cookingTime: {
      minTime: 2,
      maxTime: 3
    },
    history: "Los alfajores son un dulce tradicional de Argentina y otros países de América Latina. Se cree que tienen sus raíces en la época de la colonización española, cuando se introdujo el dulce de leche en la región. Aunque hay muchas teorías sobre su origen, lo cierto es que hoy en día los alfajores son uno de los dulces más populares y queridos de Argentina.",
    punctuation: 4,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 41,
      protein: 6,
      sodium: 85,
      fiber: 1
    },
    necessaryUtensils: ["tazón grande", "batidora", "bandeja para hornear", "cortadores de galleta", "tazón para el baño María o microondas"]
  },
  {
    id: 8,
    name: "Locro",
    country: "Argentina",
    region: "Córdoba",
    ingredients: [
      "carne de vaca",
      "papas",
      "maíz cocido",
      "habas cocidas",
      "porotos cocidos",
      "cebolla",
      "tomate",
      "ají",
      "comino molido",
      "ají molido",
      "sal",
      "pimienta al gusto",
      "aceite de oliva"
    ],
    recipe: "1. Corta la carne en cubos pequeños y reserva. 2. En una olla grande, calienta un poco de aceite de oliva a fuego medio y agrega la cebolla picada. Sofríe hasta que esté transparente. 3. Agrega la carne y saltéala hasta que esté dorada por todos lados. Agrega los tomates picados y los ajíes picantes y cocina por unos minutos más. 4. Agrega las papas y el maíz y cocina por unos 10 minutos más. 5. Agrega las habas y los porotos y cocina por unos 5 minutos más. Agrega el comino, el ají molido, la sal y la pimienta al gusto y mezcla bien. 6. Reduce el fuego a bajo y cocina a fuego lento por unos 20 minutos más, o hasta que la carne esté suave y tierna. 7. Sirve caliente, acompañado de queso rallado y una cucharada de aguacate picado.",
    otherNames: ["Sancocho", "Cocido"],
    cookingTime: {
      minTime: 3,
      maxTime: 4
    },
    history: "El locro es un plato tradicional de Argentina y otros países de Sudamérica. Se cree que tiene sus raíces en la época de la colonización española, cuando se introdujo el maíz y los porotos en la región. Aunque hay muchas teorías sobre su origen, lo cierto es que hoy en día el locro es uno de los platos más populares y queridos de Argentina.",
    punctuation: 4,
    nutritionalInformation: {
      calories: 500,
      fats: 20,
      carbohydrates: 60,
      protein: 20,
      sodium: 150,
      fiber: 10
    },
    necessaryUtensils: ["olla grande", "cuchillo de cocina", "cuchara de madera"]
  },
  {
    id: 9,
    name: "Facturas",
    country: "Argentina",
    region: "Buenos Aires",
    ingredients: [
      "harina",
      "agua",
      "azúcar",
      "sal",
      "manteca",
      "polvo de hornear",
      "aceite de oliva para freír"
    ],
    recipe: "1. En un tazón grande, mezcla la harina, el agua tibia, el azúcar, la sal y la manteca hasta obtener una masa suave. 2. Agrega el polvo de hornear y mezcla bien. Deja la masa reposar por unos 15 minutos. 3. Divide la masa en pequeñas porciones y estírala con un rodillo hasta que tenga un grosor de aproximadamente 1/4 de pulgada. 4. Corta la masa en forma de tiras delgadas y enrolla cada tira en forma de rosquilla. 5. Calienta una sartén con aceite de oliva a fuego medio y fríe las facturas hasta que estén doradas por ambos lados. 6. Retira del fuego y escurre en papel absorbente. 7. Sirve caliente, espolvoreadas con azúcar glas o azúcar en polvo.",
    otherNames: ["Rosquillas", "Donuts"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "Las facturas son un dulce tradicional de Argentina y otros países de América Latina. Se cree que tienen sus raíces en la época de la colonización española, cuando se introdujo la fritura en la región. Aunque hay muchas teorías sobre su origen, lo cierto es que hoy en día las facturas son uno de los dulces más populares y queridos de Argentina.",
    punctuation: 4,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 41,
      protein: 6,
      sodium: 85,
      fiber: 1
    },
    necessaryUtensils: ["tazón grande", "rodillo", "sartén", "papel absorbente"]
  },
  {
    id: 10,
    name: "Tamales salteños",
    country: "Argentina",
    region: "salta",
    ingredients: [
      "masa de maíz",
      "aceite de girasol",
      "caldo de carne",
      "carne de vaca picada",
      "porotos cocidos",
      "maíz cocido",
      "cebolla",
      "tomates",
      "ajíes picantes",
      "comino molido",
      "ají molido",
      "sal y pimienta",
      "Hoja de plátano"
    ],
    recipe: "1. En un tazón grande, mezcla la masa de maíz, el aceite de girasol y el caldo de carne hasta obtener una masa suave. 2. En otro tazón, mezcla la carne picada, los porotos, el maíz, la cebolla picada, los tomates picados y los ajíes picantes. Agrega la sal y la pimienta al gusto y mezcla bien. 3. Coloca un poco de la mezcla de carne en el centro de cada hoja de plátano y envuelve para formar un paquete. 4. Coloca los tamales en una olla grande con agua hirviendo y cocina a fuego medio durante 1 hora, o hasta que estén suaves y tiernos",
    otherNames: ["Tamalitos", "Tamales de maíz"],
    cookingTime: {
      minTime: 2,
      maxTime: 3
    },
    history: "Los tamales salteños son un plato tradicional de Argentina y otros países de Sudamérica. Se cree que tienen sus raíces en la época de la colonización española, cuando se introdujo el maíz y los porotos en la región. Aunque hay muchas teorías sobre su origen, lo cierto es que hoy en día los tamales salteños son uno de los platos más populares y queridos de Argentina.",
    punctuation: 4,
    nutritionalInformation: {
      calories: 500,
      fats: 20,
      carbohydrates: 60,
      protein: 20,
      sodium: 150,
      fiber: 10
    },
    necessaryUtensils: ["tazón grande", "olla grande", "cuchillo de cocina", "hojas de plátano"]
  },
  {
    id: 11,
    name: "salteña",
    country: "Bolivia",
    region: "La Paz",
    ingredients: [
      "harina de trigo",
      "manteca",
      "agua",
      "carne",
      "papa",
      "cebolla",
      "apio",
      "tomate",
      "pimienta",
      "orégano",
      "aji",
      "aceite"
    ],
    recipe: "Para preparar salteña, primero debes mezclar la harina de trigo, la manteca y el agua para formar una masa. Luego, corta la carne en cubos y saltéala en una sartén con aceite. Agrega la cebolla, el apio y el tomate picados y sofríe por unos minutos. Añade la carne y las papas cocidas a la sartén y mezcla bien. Agrega sal, pimienta, orégano y aji al gusto y cocina por unos minutos más. Luego, coloca la masa en una superficie enharinada y corta círculos con un cortapasta. Coloca una cucharada de la mezcla de carne en el centro de cada círculo de masa y cierra la salteña doblando la masa por la mitad. Cierra los bordes con un tenedor y fríe las salteñas en aceite caliente hasta que estén doradas. Sirve caliente.",
    otherNames: [
      "Empanada salteña"
    ],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "salteña es una empanada típica de Bolivia, especialmente de la región de La Paz. Se dice que tiene su origen en el siglo XVIII, cuando las empanadas se convirtieron en una forma popular de llevar la comida a los campos durante la época de siembra. salteña es conocida por su relleno picante y su masa dulce, y se sirve como snack o aperitivo, a menudo acompañado de una bebida caliente.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 400,
      fats: 20,
      carbohydrates: 50,
      protein: 15,
      sodium: 600,
      fiber: 4
    },
    necessaryUtensils: [
      "olla",
      "sartén",
      "cortapasta",
      "tenedor",
      "rodillo"
    ]
  },
  {
    id: 12,
    name: "Pique a lo macho",
    country: "Bolivia",
    region: "La Paz",
    ingredients: [
      "carne",
      "papa",
      "cebolla",
      "apio",
      "tomate",
      "pimiento verde",
      "huevo",
      "aji",
      "aceite"
    ],
    recipe: "Para preparar Pique a lo macho, primero debes cortar la carne en cubos y saltearla en una sartén con aceite. Agrega la cebolla, el apio y el tomate picados y sofríe por unos minutos. Añade las papas cocidas y el pimiento verde picado y mezcla bien. Agrega sal y aji al gusto y cocina por unos minutos más. Por último, bate un huevo y agrégalo a la sartén, mezclando bien. Sirve caliente.",
    otherNames: [],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "Pique a lo macho es un plato típico de Bolivia, especialmente de la región de La Paz. Se dice que tiene su origen en la época de la colonización española, cuando se utilizaba la carne como alimento principal. Pique a lo macho se prepara con carne, papas y verduras y se sirve como plato principal, a menudo acompañado de arroz o papas fritas.",
    punctuation: 4,
    nutritionalInformation: {
      calories: 350,
      fats: 15,
      carbohydrates: 25,
      protein: 25,
      sodium: 400,
      fiber: 2
    },
    necessaryUtensils: [
      "olla",
      "sartén",
      "cuchillo",
      "tabla de cortar",
      "tenedor"
    ]
  },
  {
    id: 13,
    name: "Puchero",
    country: "Bolivia",
    region: "La Paz",
    ingredients: [
      "carne",
      "papa",
      "cebolla",
      "apio",
      "tomate",
      "maíz",
      "verduras",
      "aji",
      "aceite"
    ],
    recipe: "Para preparar Puchero, primero debes cortar la carne en cubos y saltearla en una sartén con aceite. Agrega la cebolla, el apio y el tomate picados y sofríe por unos minutos. Luego, agrega las papas y el maíz cocido y mezcla bien. Agrega las verduras al gusto y cocina por unos minutos más. Agrega sal y aji al gusto y sirve caliente.",
    otherNames: [],
    cookingTime: {
      minTime: 45,
      maxTime: 60
    },
    history: "Puchero es un plato típico de Bolivia, especialmente de la región de La Paz. Se trata de una sopa espesa que se prepara con carne, papas, maíz y verduras. Puchero se sirve como plato principal, a menudo acompañado de arroz o pan.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 400,
      fats: 20,
      carbohydrates: 30,
      protein: 25,
      sodium: 500,
      fiber: 3
    },
    necessaryUtensils: [
      "olla",
      "sartén",
      "cuchillo",
      "tabla de cortar",
      "tenedor"
    ]
  },
  {
    id: 14,
    name: "Fritanga",
    country: "Bolivia",
    region: "",
    ingredients: [
      "carne de cerdo o pollo",
      "maíz",
      "plátano",
      "papas",
      "cebolla",
      "ají"
    ],
    recipe: "Para preparar la fritanga, se empieza cortando la carne de cerdo o pollo en trozos y se fríen en aceite caliente hasta que estén dorados. Luego se añaden las papas y el maíz, y se fríen junto con la carne. Se agrega la cebolla y el ají picado y se fríen por unos minutos más. Finalmente, se sirve la fritanga acompañada de plátano frito y otras verduras al gusto.",
    otherNames: [""],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La fritanga es un plato típico de la cocina boliviana que se ha popularizado en otros países de Sudamérica. Se cree que tiene sus raíces en la cocina criolla, que se desarrolló a partir de la fusión de las tradiciones culinarias indígenas y españolas en la región. La fritanga se prepara con ingredientes típicos de la región y se sirve como plato principal en ocasiones especiales o en fiestas faares.",
    punctuation: 4,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 40,
      protein: 20,
      sodium: 500,
      fiber: 5
    },
    necessaryUtensils: [
      "cuchillo",
      "sartén",
      "fuego"
    ]
  },
  {
    id: 15,
    name: "Charque",
    country: "Bolivia",
    region: "La Paz",
    ingredients: [
      "carne de vaca",
      "chala",
      "cebolla",
      "ají",
      "comino",
      "orégano",
      "sal"
    ],
    recipe: "Para preparar el charque, primero se debe lavar y cortar la carne de vaca en trozos pequeños. Luego se pone a cocinar en una olla con suficiente agua hasta que esté tierna. Una vez cocida, se retira del fuego y se deja enfriar. Mientras tanto, se prepara la chala (un tipo de pan seco) cortándola en pedazos pequeños y remojándola en agua para que se ablande. Luego se fríe en una sartén con aceite caliente. Se corta la cebolla, el ají y se mezcla con la carne cocida y la chala frita. Se le agrega comino, orégano y sal al gusto. Se deja cocinar por unos minutos más y luego se sirve caliente.",
    otherNames: ["charqui", "charque de carne"],
    cookingTime: {
      minTime: 2,
      maxTime: 4
    },
    history: "El charque es un plato tradicional de Bolivia que se ha preparado durante siglos por los pueblos indígenas de la región. Se originó como una forma de conservar la carne en los climas cálidos y secos de la zona, y se ha convertido en un plato popular en . El charque es especialmente popular en la región de La Paz, donde se suele servir como parte de la cena o como aperitivo en las fiestas y celebraciones.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 250,
      fats: 10,
      carbohydrates: 20,
      protein: 15,
      sodium: 300,
      fiber: 5
    },
    necessaryUtensils: [
      "olla",
      "sartén",
      "cuchillo",
      "tabla de cortar"
    ]
  },
  {
    id: 16,
    name: "Chairo",
    country: "Bolivia",
    region: "Potosí",
    ingredients: [
      "carne de cordero o de llama",
      "papa",
      "cebolla",
      "ají",
      "comino",
      "orégano",
      "sal"
    ],
    recipe: "Para preparar el chairo, se comienza por cocinar la carne de cordero o de llama en agua con un poco de sal hasta que esté tierna. Luego se cortan las verduras (papa, cebolla y ají) y se agregan a la olla con la carne cocida. Se le agrega comino, orégano y sal al gusto y se deja cocinar por unos minutos más. Se sirve caliente, a menudo acompañado de pan o de maíz cocido.",
    otherNames: ["ch'airo"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "El chairo es una sopa tradicional de Bolivia que se ha preparado durante siglos por los pueblos indígenas de la región. Se originó en la región de Potosí, en el altiplano boliviano, y se ha convertido en un plato popular en . El chairo se suele servir como parte de la cena o como aperitivo en las fiestas y celebraciones.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 20,
      protein: 15,
      sodium: 250,
      fiber: 5
    },
    necessaryUtensils: [
      "olla",
      "cuchillo",
      "tabla de cortar"
    ]
  },
  {
    id: 17,
    name: "Sajta de pollo",
    country: "Bolivia",
    region: "Cochabamba",
    ingredients: [
      "pollo",
      "tomate",
      "ají",
      "cebolla",
      "ajo",
      "comino",
      "orégano",
      "sal",
      "aceite"
    ],
    recipe: "Para preparar la sajta de pollo, se comienza por cortar el pollo en trozos y saltearlo en una sartén con aceite caliente. Luego se agrega la cebolla, el ajo y el ají picado y se deja cocinar por unos minutos más. Se le agrega el tomate picado y se deja cocinar hasta que esté suave. Se le agrega comino, orégano y sal al gusto y se deja cocinar por unos minutos más. Se sirve caliente, a menudo acompañado de arroz o de papas cocidas.",
    otherNames: ["salta de pollo"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "La sajta de pollo es una receta típica de Bolivia que se ha preparado durante siglos en la región de Cochabamba. Se ha convertido en un plato popular en  y es especialmente popular como aperitivo en las fiestas y celebraciones.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 250,
      fats: 10,
      carbohydrates: 20,
      protein: 15,
      sodium: 300,
      fiber: 5
    },
    necessaryUtensils: [
      "sartén",
      "cuchillo",
      "tabla de cortar"
    ]
  },
  {
    id: 18,
    name: "Silpancho",
    country: "Bolivia",
    region: "Cochabamba",
    ingredients: [
      "carne de res",
      "huevo",
      "papas",
      "harina",
      "aceite",
      "sal"
    ],
    recipe: "Para preparar el silpancho, se comienza por cortar la carne de res en finas lonjas y se empaniza con harina. Luego se fríe en una sartén con aceite caliente hasta que esté dorada por ambos lados. Mientras tanto, se cocinan las papas y se fríe un huevo. Se sirve todo junto, con la carne empanizada, el huevo frito y las papas fritas a un lado. Se le agrega sal al gusto.",
    otherNames: ["lomito"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "El silpancho es un plato típico de Bolivia que se ha preparado durante siglos en la región de Cochabamba. Se ha convertido en un plato popular en  y es especialmente popular como opción para el almuerzo o la cena.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 400,
      fats: 20,
      carbohydrates: 40,
      protein: 20,
      sodium: 400,
      fiber: 5
    },
    necessaryUtensils: [
      "sartén",
      "plato hondo",
      "cuchillo",
      "tabla de cortar"
    ]
  },
  {
    id: 19,
    name: "Sopa de maní",
    country: "Bolivia",
    region: "",
    ingredients: [
      "maní molido",
      "cebolla grande",
      "dientes de ajo",
      "tomate grande",
      "comino molido",
      "ají molido",
      "caldo de pollo",
      "sal",
      "pimienta",
      "aceite de oliva"
    ],
    recipe: "1. En una olla grande, calienta un poco de aceite de oliva a fuego medio y agrega la cebolla y el ajo picados. Sofríe hasta que estén suaves. \n2. Agrega el tomate picado y cocina durante unos minutos más. \n3. Agrega el maní molido y cocina durante unos minutos más. \n4. Agrega el caldo de pollo o el agua y los condimentos. Deja que la sopa hierva y luego baja el fuego a medio-bajo. Deja que la sopa se cocine durante al menos 30 minutos. \n5. Sirve la sopa caliente y agrega condimentos al gusto, como queso rallado o perejil picado.",
    otherNames: [],
    cookingTime: {
      minTime: 0.5,
      maxTime: 30
    },
    history: "La sopa de maní es un plato tradicional de Bolivia y se ha preparado en el país durante siglos. Es un plato nutritivo y delicioso que se ha convertido en una opción popular en . La sopa de maní se sirve comúnmente como plato principal y se puede acompañar con una variedad de guarniciones.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 20,
      protein: 8,
      sodium: 50,
      fiber: 3
    },
    necessaryUtensils: [
      "Olla grande",
      "Cuchillo",
      "Tabla de cortar",
      "Taza de medir"
    ]
  },
  {
    id: 20,
    name: "Majadito",
    country: "Bolivia",
    region: "",
    ingredients: [
      "arroz cocido",
      "pechuga de pollo o 1 lonja de cerdo",
      "cebolla",
      "dientes de ajo",
      "tomate",
      "comino molido",
      "ají molido",
      "caldo de pollo",
      "sal",
      "pimienta al gusto",
      "aceite de oliva"
    ],
    recipe: "1. En una olla grande, calienta un poco de aceite de oliva a fuego medio y agrega la cebolla y el ajo picados. Sofríe hasta que estén suaves. \n2. Agrega el tomate picado y cocina durante unos minutos más. \n3. Agrega la carne de pollo o cerdo picada y cocina hasta que esté dorada. \n4. Agrega el arroz cocido y mezcla bien. Agrega el caldo de pollo o agua y los condimentos. Deja que la mezcla hierva y luego baja el fuego a medio-bajo. Deja que el majadito se cocine durante al menos 20 minutos. \n5. Sirve el majadito caliente y agrega condimentos al gusto, como queso rallado o perejil picado.",
    otherNames: [],
    cookingTime: {
      minTime: 20,
      maxTime: 0.3
    },
    history: "El majadito es un plato tradicional de Bolivia que se ha preparado en el país durante siglos. Se trata de un plato nutritivo y delicioso que se ha convertido en una opción popular en . El majadito se sirve comúnmente como plato principal y se puede acompañar con una variedad de guarniciones.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 250,
      fats: 10,
      carbohydrates: 30,
      protein: 10,
      sodium: 50,
      fiber: 2
    },
    necessaryUtensils: [
      "Olla grande",
      "Cuchillo",
      "Tabla de cortar",
      "Taza de medir"
    ]
  },
  {
    id: 21,
    name: "Feijoada brasileña",
    country: "Brasil",
    region: "",
    ingredients: [
      "Feijão preto (frijoles negros)",
      "Tocino",
      "Lingüiça",
      "Chouriço",
      "caldo de carne",
      "cebolla",
      "ajo",
      "tomate",
      "pimiento verde",
      "orégano",
      "sal y pimienta al gusto"
    ],
    recipe: "Para preparar la feijoada brasileña, comienza por cocinar el frijol negro según las instrucciones del paquete. Mientras tanto, corta el tocino, la lingüiça y el chouriço en rodajas y saltéalos en una sartén con un poco de aceite hasta que estén dorados. Añade la cebolla, el ajo, el tomate y el pimiento verde picados y saltéalos junto con la carne hasta que estén suaves. Agrega el frijol cocido y el caldo de carne y mezcla bien. Deja que la feijoada se cocine a fuego medio durante unos 30 minutos, hasta que esté bien caliente y los sabores se hayan mezclado. Sirve la feijoada en platos individuales y decora con orégano fresco picado. Sirve caliente con arroz blanco y/o farofa (maíz tostado y molido)",
    otherNames: ["Feijão com carne"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "La feijoada brasileña es un plato tradicional que se ha preparado en Brasil durante muchos años. Se cree que tiene sus raíces en la comida africana, ya que utiliza ingredientes como el frijol negro y el tocino que eran comunes en la dieta de los esclavos africanos que trabajaban en las plantaciones de café en Brasil. Hoy en día, la feijoada es un plato popular en  y se puede encontrar en muchos restaurantes y hogares brasileños.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 700,
      fats: 30,
      carbohydrates: 50,
      protein: 30,
      sodium: 600,
      fiber: 15
    },
    necessaryUtensils: [
      "Sartén",
      "Olla",
      "Cuchillo",
      "Taza de medir",
      "Cuchara de madera"
    ]
  },
  {
    id: 22,
    name: "Pão de queijo brasileño",
    country: "Brasil",
    region: "",
    ingredients: [
      "Harina de mandioca (tapioca)",
      "Queso rallado",
      "huevos",
      "leche",
      "aceite de oliva",
      "sal al gusto"
    ],
    recipe: "Para preparar el pão de queijo brasileño, comienza por mezclar la harina de mandioca, el queso rallado, los huevos, la leche y el aceite de oliva en un tazón grande. Agrega un poco de sal al gusto y mezcla bien hasta obtener una masa suave. Forma pequeñas bolitas de masa con las manos y colócalas en una bandeja para hornear engrasada. Hornea a 180°C durante unos 15-20 minutos, hasta que estén dorados por encima. Sirve caliente, acompañado de una salsa de tu elección.",
    otherNames: ["Bolinho de queijo"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "El pão de queijo brasileño es una deliciosa comida de aperitivo que se ha preparado en Brasil durante muchos años. Se cree que tiene sus raíces en la comida mineira, ya que utiliza ingredientes como la harina de mandioca y el queso rallado que son comunes en la región de Minas Gerais. Hoy en día, el pão de queijo es un plato popular en  y se puede encontrar en muchos restaurantes y hogares brasileños.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 20,
      protein: 10,
      sodium: 300,
      fiber: 5
    },
    necessaryUtensils: [
      "Tazón",
      "Bandeja para hornear",
      "Cuchillo",
      "Taza de medir",
      "Cuchara de madera",
      "Horno"
    ]
  },
  {
    id: 23,
    name: "Churrasco brasileño",
    country: "Brasil",
    region: "",
    ingredients: [
      "carne de vaca",
      "cordero",
      "pollo",
      "chorizo",
      "cebolla",
      "ajo",
      "pimiento verde",
      "sal y pimienta al gusto"
    ],
    recipe: "Para preparar el churrasco brasileño, comienza por cortar la carne en rodajas gruesas y sazonarla con sal y pimienta al gusto. Deja que la carne se marine durante al menos una hora en la nevera. Mientras tanto, prepara la parrilla calentándola a fuego medio-alto. Coloca la carne en la parrilla y cocina durante unos 5-7 minutos por cada lado, hasta que esté dorada por fuera y cocida al punto deseado por dentro. Sirve la carne caliente, acompañada de verduras a la parrilla y una salsa de tu elección.",
    otherNames: ["Churrasco argentino"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "El churrasco brasileño es un plato tradicional que se ha preparado en Brasil durante muchos años. Se cree que tiene sus raíces en la comida campesina, ya que utiliza ingredientes fáciles de conseguir y es muy nutritiva. Hoy en día, el churrasco es un plato popular en  y se puede encontrar en muchos restaurantes y hogares brasileños.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 20,
      carbohydrates: 0,
      protein: 50,
      sodium: 400,
      fiber: 0
    },
    necessaryUtensils: [
      "Parrilla",
      "Tenedor de carne",
      "Cuchillo",
      "Plato",
      "Pinzas"
    ]
  },
  {
    id: 24,
    name: "Coxinha",
    country: "Brasil",
    region: "",
    ingredients: [
      "pollo deshuesado y picado finamente",
      "caldo de pollo",
      "ajo",
      "cebolla",
      "perejil",
      "sal",
      "pimienta",
      "Harina",
      "huevo",
      "pan rallado"
    ],
    recipe: "Para preparar la coxinha, primero se cocina el pollo con caldo de pollo, ajo, cebolla, perejil, sal y pimienta hasta que esté tierno. Luego se retira del fuego y se deja enfriar. Una vez frío, se pican finamente y se mezcla con la harina y se amasa hasta formar una masa suave. Se dividen la masa en porciones y se modelan en forma de pepita o cono. Se colocan en un tenedor y se sumergen en un huevo batido y luego se pasan por pan rallado. Se fríen en aceite caliente hasta que estén doradas. Se sirven calientes, a menudo con salsa de tomate o mayonesa.",
    otherNames: ["Pepita de pollo", "Croqueta de pollo"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "La coxinha es una popular comida de origen brasileño que se cree que tiene sus raíces en el siglo XVIII. Se dice que fue creada por la cocinera de la princesa Isabel de Braganza, que quería una comida que fuera fácil de llevar y comer mientras viajaban. La coxinha se ha convertido en una comida popular en todo Brasil y es comúnmente servida en fiestas y eventos.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 250,
      fats: 15,
      carbohydrates: 20,
      protein: 10,
      sodium: 300,
      fiber: 1
    },
    necessaryUtensils: [
      "Olla",
      "Tenedor",
      "Sartén",
      "Cuchillo",
      "Taza de medir",
      "Tabla de cortar"
    ]
  },
  {
    id: 25,
    name: "Brigadeiro",
    country: "Brasil",
    region: "",
    ingredients: [
      "leche condensada",
      "mantequilla",
      "cacao en polvo",
      "huevo",
      "harina de trigo",
      "chocolate rallado o granulado"
    ],
    recipe: "Para preparar el brigadeiro, se mezclan la leche condensada, la mantequilla y el cacao en polvo en una cacerola y se calienta a fuego medio, revolviendo constantemente hasta que la mezcla se separe del fondo de la cacerola y forme una bola suave. Se retira del fuego y se deja enfriar ligeramente. Luego se agrega el huevo y se mezcla hasta que quede suave. Se coloca la harina de trigo en un plato y se forman pequeñas bolas con la mezcla, pasándolas por la harina para cubrirlas. Se colocan las bolas en un plato con chocolate rallado o granulado y se dejan enfriar. Una vez fríos, se sirven o se envuelven en papel de aluminio o papel de regalo para regalar.",
    otherNames: ["Bolo de rolo"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 60
    },
    history: "El brigadeiro es un dulce muy popular en Brasil y se dice que fue creado en el año 1940 por un grupo de mujeres que estaban apoyando a un candidato político llamado Brigadeiro. La receta se hizo muy popular y se convirtió en una delicia tradicional en todo Brasil. Se suele servir en bodas, fiestas de cumpleaños y otros eventos especiales.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 100,
      fats: 5,
      carbohydrates: 15,
      protein: 1,
      sodium: 50,
      fiber: 1
    },
    necessaryUtensils: [
      "Cacerola",
      "Taza de medir",
      "Cuchara de madera",
      "Plato",
      "Tenedor",
      "Papel de aluminio o papel de regalo (opcional)"
    ]
  },
  {
    id: 26,
    name: "Moqueca",
    country: "Brasil",
    region: "Espirito Santo",
    ingredients: [
      "pescado fresco",
      "coconut milk",
      "cilantro",
      "ajo",
      "cebolla",
      "tomate",
      "pimienta",
      "sal",
      "caldo de pescado o agua",
      "aceite de coco"
    ],
    recipe: "Para preparar la moqueca, se corta el pescado en trozos y se coloca en una olla con la leche de coco, el cilantro, el ajo, la cebolla, el tomate, la pimienta y la sal. Se añade suficiente caldo de pescado o agua para cubrir el pescado y se cocina a fuego medio hasta que el pescado esté cocido y la sopa esté espesa. Se sirve caliente, a menudo con arroz y un poco de aceite de coco por encima.",
    otherNames: ["Muqueca", "Muckeka"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 60
    },
    history: "La moqueca es un plato tradicional de la región de Espírito Santo en Brasil y se cree que tiene sus raíces en la cocina africana. Se dice que fue creada por los esclavos africanos que trabajaban en las plantaciones de cacao y que la preparaban con los pescados y mariscos que pescaban en el océano. Hoy en día, la moqueca es un plato muy popular en todo Brasil y se sirve en muchas ocasiones especiales.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 300,
      fats: 25,
      carbohydrates: 15,
      protein: 20,
      sodium: 500,
      fiber: 2
    },
    necessaryUtensils: [
      "Olla",
      "Cuchillo",
      "Tabla de cortar",
      "Taza de medir",
      "Cuchara de madera"
    ]
  },
  {
    id: 27,
    name: "Acarajé",
    country: "Brasil",
    region: "Bahía",
    ingredients: [
      "frijoles negros",
      "cebolla",
      "ajo",
      "sal",
      "aceite de palma"
    ],
    recipe: "Para preparar el acarajé, se remojan los frijoles negros durante la noche y luego se muelen en una pasta fina. Se mezcla con la cebolla, el ajo y la sal y se amasa hasta obtener una masa suave. Se dividen la masa en porciones y se forma en bolas. Se fríen en aceite de palma caliente hasta que estén doradas y crujientes por fuera y suaves por dentro. Se sirven calientes, a menudo rellenos de diferentes ingredientes como camarones, vatapá o caruru.",
    otherNames: ["Bola de caroço", "Caroço"],
    cookingTime: {
      minTime: 90,
      maxTime: 120
    },
    history: "El acarajé es una comida tradicional de la región de Bahía en Brasil y se cree que tiene sus raíces en la cocina africana. Se dice que fue creada por las mujeres africanas que trabajaban en las plantaciones de cacao y que la preparaban con los frijoles negros que cultivaban. Hoy en día, el acarajé es una comida popular en todo Brasil y se suele servir en fiestas y eventos especiales.",
    punctuation: 4.2,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 30,
      protein: 10,
      sodium: 300,
      fiber: 5
    },
    necessaryUtensils: [
      "Olla",
      "Taza de medir",
      "Molino o procesador de alimentos",
      "Sartén",
      "Cuchara de madera"
    ]
  },
  {
    id: 28,
    name: "Mandioca frita",
    country: "Brasil",
    region: "",
    ingredients: [
      "Mandioca",
      "aceite",
      "sal"
    ],
    recipe: "Para preparar la mandioca frita, se pelan y cortan las raíces de mandioca en rodajas delgadas. Se fríen en aceite caliente hasta que estén doradas y crujientes. Se escurren en papel absorbente y se espolvorean con un poco de sal. Se sirven calientes como acompañamiento o como snack.",
    otherNames: ["yuca frita", "yuca chips"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La mandioca es una raíz muy popular en Brasil y se utiliza en muchos platos tradicionales. La mandioca frita es una forma común de prepararla y se suele servir como acompañamiento o como snack. Se cree que tiene sus raíces en la cocina africana y que fue introducida en Brasil por los esclavos africanos que trabajaban en las plantaciones de cacao y otros cultivos.",
    punctuation: 4.4,
    nutritionalInformation: {
      calories: 150,
      fats: 10,
      carbohydrates: 20,
      protein: 2,
      sodium: 300,
      fiber: 3
    },
    necessaryUtensils: [
      "Cuchillo",
      "Tabla de cortar",
      "Sartén",
      "Papel absorbente",
      "Tenedor"
    ]
  },
  {
    id: 29,
    name: "Vatapá",
    country: "Brasil",
    region: "Bahía",
    ingredients: [
      "frijoles negros cocidos",
      "Coco rallado",
      "cilantro",
      "ajo",
      "cebolla",
      "tomate",
      "pimienta",
      "sal",
      "Camarones secos",
      "aceite de coco"
    ],
    recipe: "Para preparar el vatapá, se mezclan los frijoles negros cocidos con el coco rallado, el cilantro, el ajo, la cebolla, el tomate, la pimienta y la sal en una olla y se cocina a fuego medio hasta que la sopa esté espesa y suave. Se añaden los camarones secos y se cocina por unos minutos más hasta que estén cocidos. Se sirve caliente, a menudo con arroz y un poco de aceite de coco por encima.",
    otherNames: [],
    cookingTime: {
      minTime: 0.5,
      maxTime: 60
    },
    history: "El vatapá es un plato tradicional de la región de Bahía en Brasil y se cree que tiene sus raíces en la cocina africana. Se dice que fue creado por los esclavos africanos que trabajaban en las plantaciones de cacao y que la preparaban con los frijoles negros y el coco rallado que cultivaban. Hoy en día, el vatapá es un plato muy popular en todo Brasil y se sirve en muchas ocasiones especiales.",
    punctuation: 4.7,
    nutritionalInformation: {
      calories: 300,
      fats: 25,
      carbohydrates: 15,
      protein: 20,
      sodium: 500,
      fiber: 2
    },
    necessaryUtensils: [
      "Olla",
      "Cuchillo",
      "Tabla de cortar",
      "Taza de medir",
      "Cuchara de madera"
    ]
  },
  {
    id: 30,
    name: "Canjiquinha",
    country: "Brasil",
    region: "Minas Gerais",
    ingredients: [
      "maíz",
      "carne",
      "cebolla",
      "apio",
      "tomate",
      "pimienta",
      "orégano",
      "aceite"
    ],
    recipe: "Para preparar Canjiquinha, primero debes cocinar el maíz en agua hasta que esté suave. Luego, corta la carne en cubos y saltéala en una sartén con aceite. Agrega la cebolla, el apio y el tomate picados y sofríe por unos minutos. Añade la carne y el maíz cocido a la sartén y mezcla bien. Agrega sal, pimienta y orégano al gusto y cocina por unos minutos más. Sirve caliente.",
    otherNames: [
      "Canjiquinha Mineira"
    ],
    cookingTime: {
      minTime: 0.5,
      maxTime: 60
    },
    history: "Canjiquinha es un plato típico de la región de Minas Gerais en Brasil. Se dice que tiene su origen en la época de la colonización portuguesa, cuando se utilizaba el maíz como alimento básico. Canjiquinha es una versión más espesa de la sopa de maíz y se sirve como plato principal, a menudo acompañado de carne o pollo.",
    punctuation: 4.1,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 35,
      protein: 10,
      sodium: 500,
      fiber: 3
    },
    necessaryUtensils: [
      "olla",
      "sartén",
      "cuchillo",
      "tabla de cortar",
      "tenedor"
    ]
  },
  {
    id: 31,
    name: "Empanadas chilenas",
    country: "Chile",
    region: "América del Sur",
    ingredients: [
      "masa de harina de trigo",
      "aceite",
      "agua",
      "sal",
      "relleno de carne picada",
      "cebolla",
      "ajo",
      "papa cocida",
      "ají verde",
      "huevo batido"
    ],
    recipe: "1. En un tazón grande, mezcla la harina, el aceite, el agua y la sal hasta que se forme una masa suave. Deja reposar durante 15 minutos.\n2. Mientras tanto, en una sartén, sofríe la carne picada con la cebolla, el ajo y la papa cocida hasta que esté cocida. Agrega el ají verde y mezcla bien. Retira del fuego y deja enfriar.\n3. Divide la masa en porciones individuales y estírala con un rodillo para formar discos. Coloca un poco de relleno en el centro de cada disco y cierra las empanadas dándoles forma redonda. Pinta las empanadas con el huevo batido y hornea durante 15-20 minutos o hasta que estén doradas. Sirve caliente.\n",
    otherNames: ["Empanadillas chilenas"],
    cookingTime: {
      maxTime: 0.5,
      minTime: 0.25
    },
    history: "Las empanadas chilenas son una versión local de las empanadas latinoamericanas, que se han adaptado utilizando ingredientes y sabores locales. Se cree que las empanadas chilenas se originaron en la región de La Serena, donde se consumían en ocasiones especiales como bodas y fiestas religiosas. Con el tiempo, se convirtieron en un plato típico de la comida chilena y se pueden encontrar en .",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 20,
      protein: 10,
      sodium: 300,
      fiber: 2
    },
    necessaryUtensils: [
      "Tazón",
      "Rodillo",
      "Sartén",
      "Horno"
    ]
  },
  {
    id: 32,
    name: "Cazuela chilena",
    country: "Chile",
    region: "América del Sur",
    ingredients: [
      "carne de vaca",
      "papa",
      "maíz",
      "zapallo",
      "cebolla",
      "ajo",
      "tomate",
      "caldo de carne",
      "perejil",
      "pimienta"
    ],
    recipe: "1. Corta la carne de vaca en trozos medianos y colócala en una cazuela de barro. Agrega las papas, el maíz, el zapallo, la cebolla, el ajo y el tomate cortados en trozos. Agrega el caldo de carne hasta cubrir todos los ingredientes.\n2. Cocina la cazuela a fuego lento durante unas 2 horas o hasta que la carne esté tierna y los vegetales estén cocidos. Sazona con perejil y pimienta al gusto. Sirve caliente en platos hondos y acompañado de pan.\n",
    otherNames: ["Guiso chileno"],
    cookingTime: {
      maxTime: 2,
      minTime: 1.5
    },
    history: "La cazuela chilena es un plato tradicional de la gastronomía chilena que se originó en la región de Santiago. Se cree que el plato fue creado a partir de la influencia de la cocina española, que llegó a Chile en la época colonial. La cazuela se ha convertido en un plato típico del país y se sirve en ocasiones especiales como fiestas y reuniones faares.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 30,
      protein: 20,
      sodium: 400,
      fiber: 3
    },
    necessaryUtensils: [
      "Cazuela de barro",
      "Cuchillo",
      "Sartén"
    ]
  },
  {
    id: 33,
    name: "Asado chileno",
    country: "Chile",
    region: "América del Sur",
    ingredients: [
      "carne de vaca",
      "sal",
      "pimienta",
      "ajo",
      "cebolla",
      "perejil",
      "tomate",
      "ají verde",
      "papa",
      "maíz"
    ],
    recipe: "1. Corta la carne de vaca en rodajas gruesas y sázalas con sal, pimienta, ajo y cebolla picada. Deja reposar durante unos 30 minutos.\n2. Enciende el asador y coloca la carne en la parrilla. Cocina la carne a fuego medio durante unos 15-20 minutos o hasta que esté cocida al gusto.\n3. Mientras se cocina la carne, prepara una ensalada con perejil, tomate, ají verde y papa y maíz cocidos. Sirve la carne con la ensalada y acompaña con pan.\n",
    otherNames: ["Churrasco chileno"],
    cookingTime: {
      maxTime: 0.5,
      minTime: 0.25
    },
    history: "El asado chileno es un plato típico de la gastronomía chilena que se originó en la región de Santiago. Se trata de una versión local del asado latinoamericano, que se ha adaptado utilizando ingredientes y sabores propios de Chile. El asado se sirve en ocasiones especiales como fiestas y reuniones faares y se acompaña con ensalada y pan.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 250,
      fats: 15,
      carbohydrates: 20,
      protein: 20,
      sodium: 350,
      fiber: 2
    },
    necessaryUtensils: [
      "Asador",
      "Cuchillo",
      "Sartén"
    ]
  },
  {
    id: 34,
    name: "porotos granados chilenos",
    country: "Chile",
    region: "América del Sur",
    ingredients: [
      "porotos verdes",
      "zapallo",
      "cebolla",
      "ajo",
      "tomate",
      "caldo de carne",
      "perejil",
      "pimienta"
    ],
    recipe: "1. Remoja los porotos verdes durante unas 8 horas o durante toda la noche. Escurre los porotos y colócalos en una olla con agua fresca. Cocina los porotos a fuego medio durante unas 2 horas o hasta que estén tiernos.\n2. Mientras se cocinan los porotos, corta el zapallo, la cebolla, el ajo y el tomate en trozos pequeños. En una sartén, sofríe los vegetales con un poco de aceite hasta que estén cocidos.\n3. Agrega los vegetales cocidos a la olla con los porotos y agrega el caldo de carne. Cocina todo junto durante unos 30 minutos más o hasta que los vegetales estén bien mezclados con los porotos. Sazona con perejil y pimienta al gusto. Sirve caliente en platos hondos.\n",
    otherNames: ["Guiso de porotos"],
    cookingTime: {
      maxTime: 3,
      minTime: 2.5
    },
    history: "Los porotos granados chilenos son un plato tradicional de la gastronomía chilena que se originó en la región de Santiago. Los porotos verdes son un tipo de legumbre muy común en Chile y se utilizan en muchos platos típicos del país. Los porotos granados se cocinan con zapallo, cebolla, ajo, tomate y caldo de carne y se sirven como acompañamiento para carnes y pescados.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 20,
      protein: 10,
      sodium: 300,
      fiber: 3
    },
    necessaryUtensils: [
      "Olla",
      "Cuchillo",
      "Sartén"
    ]
  },
  {
    id: 35,
    name: "Curanto",
    country: "Chile",
    region: "Chiloé",
    ingredients: [
      "carne de cerdo",
      "pollo",
      "mariscos",
      "verduras",
      "papas"
    ],
    recipe: "Para preparar el curanto, se comienza por enterrar una olla de barro o hierro en la tierra y calentar las piedras en un fuego. Cuando las piedras estén calientes, se colocan en la olla y se agrega la carne de cerdo y el pollo, así como los mariscos y las verduras. Se cubre la olla con hojas y se deja cocinar por unas horas hasta que todos los ingredientes estén cocidos. Finalmente, se sirve con papas cocidas al lado.",
    otherNames: ["chilote", "palo-lao"],
    cookingTime: {
      minTime: 2,
      maxTime: 3
    },
    history: "El curanto es un platillo típico de la región de Chiloé en Chile. Se cree que tiene sus raíces en la época precolombina, cuando los habitantes de la isla ya cocinaban alimentos enterrados en la tierra. Con el tiempo, se fueron incorporando diferentes ingredientes y se convirtió en el platillo que se conoce hoy en día.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 20,
      protein: 40,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: ["olla de barro o hierro", "piedras calientes", "hojas"]
  },
  {
    id: 36,
    name: "Pastel de Choclo",
    country: "Chile",
    region: "Chile",
    ingredients: [
      "maíz",
      "carne molida",
      "cebolla",
      "ajos",
      "albahaca",
      "aceitunas",
      "huevo"
    ],
    recipe: "Para preparar el pastel de choclo, se comienza por cocinar el maíz y molerlo para formar una masa. Luego, se mezcla con la carne molida y se agrega la cebolla, los ajos, la albahaca y las aceitunas picadas. Se mezcla bien y se coloca en una fuente para hornear. Se cubre con huevo batido y se hornea hasta que esté cocido y dorado por encima. Finalmente, se sirve caliente.",
    otherNames: ["choclo", "choclo al horno"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "El pastel de choclo es un platillo típico de Chile. Se cree que tiene sus raíces en la época precolombina, cuando los habitantes de la región ya consumían maíz cocido y molido. Con el tiempo, se fueron agregando otros ingredientes y se convirtió en el pastel que se conoce hoy en día.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 20,
      protein: 40,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: ["olla", "molino", "fuente para hornear", "batidora"]
  },
  {
    id: 37,
    name: "Comida a la Piedra",
    country: "Chile",
    region: "Chile",
    ingredients: [
      "piedra volcánica",
      "carne",
      "verduras",
      "mariscos",
      "salsas"
    ],
    recipe: "Para preparar la comida a la piedra, se calienta una piedra volcánica en un fuego hasta que esté muy caliente. Luego, se colocan la carne, las verduras y los mariscos en la piedra y se cocinan hasta que estén cocidos. Se sirve con distintas salsas al lado para acompañar. La comida se cocina y se come directamente en la piedra caliente.",
    otherNames: ["comida chilena", "piedra caliente"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La comida a la piedra es una técnica de cocina típica de Chile. Se cree que se originó en la época precolombina, cuando los habitantes de la región utilizaban piedras calientes para cocinar alimentos. Con el tiempo, se fue desarrollando y se convirtió en el platillo que se conoce hoy en día.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 20,
      protein: 40,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: ["piedra volcánica", "fuego"]
  },
  {
    id: 38,
    name: "Sopaipillas",
    country: "Chile",
    region: "Chile",
    ingredients: [
      "harina",
      "levadura",
      "agua",
      "aceite"
    ],
    recipe: "Para preparar las sopaipillas, se mezcla la harina con la levadura y se agrega agua hasta formar una masa suave. Luego, se deja reposar por unos minutos y se estira hasta formar una capa delgada. Se corta en forma de cuadrados y se fríe en aceite caliente hasta que estén doradas. Se sirven calientes, espolvoreadas con azúcar.",
    otherNames: ["sopaipa", "papa"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "Las sopaipillas son una comida típica de Chile. Se cree que tienen sus raíces en la época precolombina, cuando los habitantes de la región ya preparaban panes fritos en aceite. Con el tiempo, se fue desarrollando y se convirtió en el platillo que se conoce hoy en día.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 20,
      protein: 40,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: ["olla", "sartén", "rodillo"]
  },
  {
    id: 39,
    name: "Churrasco",
    country: "Chile",
    region: "Chile",
    ingredients: [
      "carne de res",
      "pimienta",
      "ajo",
      "sal"
    ],
    recipe: "Para preparar el churrasco, se comienza por marinar la carne de res en pimienta, ajo y sal durante unas horas. Luego, se coloca en una parrilla caliente y se cocina a fuego medio hasta que esté cocida al gusto. Se sirve caliente, cortada en rodajas y acompañada de verduras al grill o de una ensalada.",
    otherNames: ["asado", "bife de chorizo"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "El churrasco es un platillo típico de Chile y de otros países de América del Sur. Se cree que tiene sus raíces en la época precolombina, cuando los habitantes de la región ya asaban carnes en las parrillas. Con el tiempo, se fue desarrollando y se convirtió en el platillo que se conoce hoy en día.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 20,
      protein: 40,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: ["parrilla", "cuchillo"]
  },
  {
    id: 40,
    name: "Palta Reina",
    country: "Chile",
    region: "Chile",
    ingredients: [
      "palta",
      "lechuga",
      "tomate",
      "mayonesa",
      "palta"
    ],
    recipe: "Para preparar la palta reina, se comienza por pelar y cortar la palta en rodajas gruesas. Luego, se coloca en un plato y se cubre con lechuga, tomate y mayonesa. Se termina cubriendo con otra capa de palta y se sirve fría. Puede acompañarse con pan o con papas fritas.",
    otherNames: ["sandwich de palta", "club sandwich"],
    cookingTime: {
      minTime: 0.25,
      maxTime: 0.3
    },
    history: "La palta reina es un platillo típico de Chile. Se cree que tiene sus raíces en el sandwich de palta, que se originó en los Estados Unidos en el siglo XIX. Con el tiempo, se fue desarrollando en Chile y se convirtió en el platillo que se conoce hoy en día.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 20,
      protein: 40,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: ["cuchillo", "tabla de cortar", "plato"]
  },
  {
    id: 41,
    name: "Bandeja Paisa",
    country: "Colombia",
    region: "Antioquia",
    ingredients: [
      "arroz",
      "frijoles",
      "Chicharrón",
      "carne asada",
      "huevo frito",
      "aguacate",
      "plátano verde frito",
      "Arepa",
      "Lechuga",
      "tomate"
    ],
    recipe: "Para preparar la Bandeja Paisa, primero se cocina el arroz y los frijoles en agua con sal. Mientras tanto, se fríe el chicharrón hasta que esté crujiente y se cocina la carne asada en una parrilla o en una sartén. También se fríe el plátano verde y se cocina el huevo frito. Una vez que todos los ingredientes estén listos, se disponen en un plato grande en capas, empezando por el arroz, seguido de los frijoles, la carne asada, el chicharrón, el huevo frito, el aguacate, el plátano frito, la arepa, la lechuga y el tomate. Se sirve caliente acompañado de una tasa de agua de panela.",
    otherNames: ["Paisa Tray"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "La Bandeja Paisa es uno de los platos más representativos de la región de Antioquia en Colombia. Se dice que fue creada por los campesinos en el siglo XIX como una forma de llevar sus alimentos consigo mientras trabajaban en los campos. Con el tiempo, se convirtió en un plato popular en toda la región y se ha vuelto un símbolo cultural de Colombia.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 1200,
      fats: 60,
      carbohydrates: 100,
      protein: 40,
      sodium: 300,
      fiber: 20
    },
    necessaryUtensils: [
      "Olla",
      "Sartén",
      "Cuchillo",
      "Tenedor",
      "Plato grande"
    ]
  },
  {
    id: 42,
    name: "Ajiaco",
    country: "Colombia",
    region: "Cundinamarca",
    ingredients: [
      "papa criolla",
      "papa blanca",
      "papa amarilla",
      "cebada",
      "zanahoria",
      "pollo",
      "caldo de pollo",
      "cilantro",
      "cebolla",
      "ajo",
      "limón",
      "crema de leche"
    ],
    recipe: "Para preparar el Ajiaco, se pela y se corta en trozos las papas criolla, blanca y amarilla, y se cuecen en una olla con agua y sal. También se cuece la cebada en agua por separado. Mientras tanto, se cocina el pollo en una olla con caldo de pollo hasta que esté tierno y se reserva. Una vez que las papas y la cebada estén cocidas, se trituran con un poco de agua de cocción hasta obtener un puré. Luego se agrega el pollo, la zanahoria, el cilantro, la cebolla, el ajo, el limón y la crema de leche al puré de papas y se mezcla bien. Se sirve caliente en platos individuales, acompañado de más cilantro picado y limón al gusto.",
    otherNames: ["Soup of three potatoes"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "El Ajiaco es uno de los platos más tradicionales de la región de Cundinamarca en Colombia. Se dice que fue creado por los indígenas Muiscas y que fue popularizado por los españoles durante la colonia. Es un plato muy nutritivo y reconfortante, especialmente en los días fríos y lluviosos.",
    punctuation: 4.8,
    nutritionalInformation: {
      calories: 500,
      fats: 20,
      carbohydrates: 60,
      protein: 30,
      sodium: 100,
      fiber: 10
    },
    necessaryUtensils: [
      "Olla",
      "Triturador",
      "Cuchillo",
      "Tenedor",
      "Plato"
    ]
  },
  {
    id: 43,
    name: "Sancocho",
    country: "Colombia",
    region: "Varios",
    ingredients: [
      "pollo",
      "yuca",
      "ñame",
      "plátano verde",
      "cilantro",
      "cebolla",
      "ajo",
      "comino",
      "caldo de pollo",
      "sal"
    ],
    recipe: "Para preparar el Sancocho, se pela y se corta en trozos la yuca y el ñame, y se cuecen en una olla con agua y sal hasta que estén tiernos. Mientras tanto, se cocina el pollo en una olla con caldo de pollo hasta que esté bien cocido. Una vez que la yuca y el ñame estén cocidos, se agrega el pollo, el plátano verde, el cilantro, la cebolla, el ajo, el comino y más sal al gusto, y se mezcla bien. Se sigue cocinando a fuego medio hasta que todos los ingredientes estén bien mezclados y el sancocho tenga una consistencia espesa. Se sirve caliente en platos individuales, acompañado de arroz blanco y aguacate.",
    otherNames: ["Stew of seven roots"],
    cookingTime: {
      minTime: 2,
      maxTime: 3
    },
    history: "El Sancocho es uno de los platos más populares en toda Colombia. Se dice que fue creado por los indígenas y que se ha convertido en un plato tradicional en muchas regiones del país. Cada región tiene su propia versión del sancocho, utilizando diferentes ingredientes y aderezos. Es un plato muy sabroso y nutritivo, especialmente en los días fríos y lluviosos.",
    punctuation: 4.7,
    nutritionalInformation: {
      calories: 600,
      fats: 20,
      carbohydrates: 80,
      protein: 30,
      sodium: 150,
      fiber: 15
    },
    necessaryUtensils: [
      "Olla",
      "Cuchillo",
      "Tenedor",
      "Plato"
    ]
  },
  {
    id: 44,
    name: "Empanadas",
    country: "Colombia",
    region: "Varios",
    ingredients: [
      "masa de maíz",
      "carne molida",
      "cebolla",
      "ajo",
      "papa",
      "zanahoria",
      "Arvejas",
      "caldo de pollo",
      "aceite",
      "sal"
    ],
    recipe: "Para preparar las Empanadas, se mezcla la carne molida con la cebolla, el ajo, la papa, la zanahoria, las arvejas, el caldo de pollo y la sal al gusto, y se deja reposar en la nevera durante una hora. Mientras tanto, se prepara la masa de maíz siguiendo las instrucciones del paquete. Una vez que la carne esté lista, se forma una bola de masa de maíz y se aplana con un rodillo hasta obtener una forma redonda. Luego se coloca un poco de carne en el centro de la masa y se cierra formando una empanada. Se fríen las empanadas en aceite caliente hasta que estén doradas por ambos lados. Se sirven calientes acompañadas de una salsa de tomate casera.",
    otherNames: ["Cornmeal turnovers"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "Las Empanadas son uno de los aperitivos más populares en toda Colombia. Se dice que fueron influenciadas por la cocina española y que se han adaptado a utilizar ingredientes y sabores locales. Son muy versátiles y se pueden rellenar con una gran variedad de ingredientes, desde carne molida hasta vegetales y queso. Son muy fáciles de preparar y son perfectas para llevar como snack o para compartir en una reunión faar.",
    punctuation: 4.6,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 30,
      protein: 20,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: [
      "Sartén",
      "Rodillo",
      "Cuchillo",
      "Tenedor",
      "Plato"
    ]
  },
  {
    id: 45,
    name: "Buñuelos",
    country: "Colombia",
    region: "Varios",
    ingredients: [
      "Harina",
      "Levadura",
      "agua",
      "azúcar",
      "Canela",
      "aceite",
      "Miel de abeja"
    ],
    recipe: "Para preparar los Buñuelos, se mezcla la harina, la levadura, el agua y un poco de azúcar en un recipiente grande, y se amasa hasta obtener una masa suave y elástica. Luego se cubre con un paño húmedo y se deja reposar en un lugar cálido durante una hora para que la masa suba. Una vez que la masa esté lista, se divide en pequeñas porciones y se forma en bolitas. Se fríen las bolitas en aceite caliente hasta que estén doradas por ambos lados. Una vez que estén listas, se sacan del aceite y se colocan en un recipiente con azúcar y canela mezclados, y se revuelven para cubrirlas por completo. Se sirven calientes, acompañados de una cucharada de miel de abeja por encima.",
    otherNames: ["Sweet fritters"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "Los Buñuelos son uno de los postres más populares en toda Colombia. Se dice que fueron influenciados por la cocina española y que se han adaptado a utilizar ingredientes y sabores locales. Son muy fáciles de preparar y son perfectos para compartir en una reunión faar o en una fiesta. Son muy populares en las épocas navideñas y se suelen servir junto con otras golosinas típicas como natillas y roscón de reyes.",
    punctuation: 4.9,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 25,
      protein: 5,
      sodium: 100,
      fiber: 1
    },
    necessaryUtensils: [
      "Recipiente grande",
      "Paño húmedo",
      "Sartén",
      "Cuchara",
      "Plato"
    ]
  },
  {
    id: 46,
    name: "Arepa",
    country: "Colombia",
    region: "Varios",
    ingredients: [
      "maíz",
      "agua",
      "sal"
    ],
    recipe: "Para preparar una arepa, se mezcla la harina de maíz con agua y sal hasta formar una masa homogénea. Luego se forma un disco con la masa y se cocina en una plancha caliente hasta que esté dorada por ambos lados. Se puede servir sola o rellena con carne, queso, huevo, aguacate, etc.",
    otherNames: ["Tortilla de maíz"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "Las arepas son un alimento tradicional en Colombia, que se preparan desde la época precolombina. Se cree que fueron llevadas a América del Sur por los indígenas, quienes las cocían en hojas de plátano o sobre piedras calientes.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 100,
      fats: 2,
      carbohydrates: 20,
      protein: 2,
      sodium: 0.5,
      fiber: 2
    },
    necessaryUtensils: [
      "Sartén",
      "Tenedor",
      "Cuchillo",
      "Taza de medir",
      "Tabla de cortar"
    ]
  },
  {
    id: 47,
    name: "Tamal",
    country: "Colombia",
    region: "Varios",
    ingredients: [
      "maíz",
      "carne",
      "verduras",
      "chorizo",
      "agua",
      "sal"
    ],
    recipe: "Para preparar un tamal, se cuece la masa de maíz en agua con sal hasta que esté suave. Luego se rellena con carne, verduras y chorizo, y se envuelve en hoja de plátano o de maíz. Se cuece en agua caliente durante unos 30 minutos, y luego se sirve caliente.",
    otherNames: ["Tamale"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "Los tamales son un platillo tradicional en Colombia, que se preparan desde la época precolombina. Se cree que fueron llevados a América del Sur por los indígenas, quienes los cocían en hojas de plátano o sobre piedras calientes.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 40,
      protein: 10,
      sodium: 0.5,
      fiber: 4
    },
    necessaryUtensils: [
      "Olla grande",
      "Cuchillo",
      "Tenedor",
      "Tabla de cortar",
      "Mortero"
    ]
  },
  {
    id: 48,
    name: "Mondongo",
    country: "Colombia",
    region: "Varios",
    ingredients: [
      "carne de res",
      "cebolla",
      "tomate",
      "zanahoria",
      "agua",
      "sal"
    ],
    recipe: "Para preparar un mondongo, se cocina la carne de res en agua con cebolla, tomate y zanahoria hasta que esté tierna. Luego se sazona con sal y se sirve caliente con arroz y aguacate.",
    otherNames: ["Sopa de carne"],
    cookingTime: {
      minTime: 2,
      maxTime: 3
    },
    history: "El mondongo es un plato tradicional en Colombia, que se prepara con carne de res y vegetales. Se cree que tiene sus raíces en la época precolombina, cuando se preparaba con carne de caza y vegetales locales.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 20,
      protein: 20,
      sodium: 0.5,
      fiber: 3
    },
    necessaryUtensils: [
      "Olla grande",
      "Cuchillo",
      "Tenedor",
      "Tabla de cortar"
    ]
  },
  {
    id: 49,
    name: "Patacones",
    country: "Colombia",
    region: "Varios",
    ingredients: [
      "plátano verde",
      "aceite de girasol",
      "sal"
    ],
    recipe: "Para preparar patacones, se cortan los plátanos verdes en rodajas gruesas y se fríen en aceite caliente hasta que estén dorados por ambos lados. Luego se aplastan con un tenedor y se fríen nuevamente hasta que estén crujientes. Se sazona con sal y se sirve caliente como acompañamiento.",
    otherNames: ["Tostones"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "Los patacones son un alimento tradicional en Colombia, que se preparan desde la época precolombina. Se cree que fueron llevados a América del Sur por los indígenas, quienes los preparaban a partir de plátanos verdes y los cocían en aceite de coco.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 100,
      fats: 5,
      carbohydrates: 15,
      protein: 1,
      sodium: 0.5,
      fiber: 2
    },
    necessaryUtensils: [
      "Sartén",
      "Tenedor",
      "Cuchillo",
      "Tabla de cortar"
    ]
  },
  {
    id: 50,
    name: "Chicharrones",
    country: "Colombia",
    region: "Varios",
    ingredients: [
      "carne de cerdo",
      "sal",
      "ajo",
      "cebolla",
      "cilantro",
      "aceite de girasol"
    ],
    recipe: "Para preparar chicharrones, se corta la carne de cerdo en trozos y se sazona con sal, ajo, cebolla y cilantro. Luego se fríe en aceite caliente hasta que esté crujiente y dorado. Se sirve caliente como aperitivo o como parte de un plato principal.",
    otherNames: ["Crispín"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "Los chicharrones son un alimento tradicional en Colombia, que se preparan desde la época precolombina. Se cree que fueron llevados a América del Sur por los indígenas, quienes utilizaban la carne de cerdo y otros ingredientes para sazonarlos y cocerlos en aceite de coco.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 200,
      fats: 15,
      carbohydrates: 5,
      protein: 15,
      sodium: 0.5,
      fiber: 1
    },
    necessaryUtensils: [
      "Sartén",
      "Tenedor",
      "Cuchillo",
      "Tabla de cortar"
    ]
  },
  {
    id: 51,
    name: "Paella",
    country: "España",
    region: "Valencia",
    ingredients: [
      "arroz",
      "caldo de pollo o pescado",
      "caldo de marisco",
      "pimiento verde",
      "pimiento rojo",
      "tomate",
      "cebolla",
      "ajo",
      "sofrito (cebolla, pimiento, ajo, tomate)",
      "sal",
      "azafrán",
      "carne de pollo",
      "Pulpo",
      "Almejas",
      "calamares",
      "gambas",
      "judías verdes"
    ],
    recipe: "Para preparar una paella, primero se fríe el sofrito en una paellera o sartén grande. A continuación, se añade la carne y se fríe hasta que esté dorada. Añade el arroz y remueve para que se mezcle con el sofrito y la carne. Agrega el caldo de pollo o pescado y el caldo de marisco, y mezcla bien. Deja que el arroz se cocine a fuego medio durante unos 20 minutos, añadiendo más caldo si es necesario. Añade el azafrán y mezcla bien. Agrega el pulpo, las almejas, los calamares, las gambas y las judías verdes. Deja que la paella se cocine a fuego medio durante unos 10 minutos más, o hasta que el arroz esté cocido. Sirve caliente.",
    otherNames: ["arroz a la valenciana", "arroz al horno"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "La paella es un plato tradicional de Valencia, en España. Se dice que fue creada por los arroceros valencianos en el siglo XIX. Se hizo famosa a nivel internacional durante la Exposición Universal de 1889, cuando se sirvió en la Ciudad Condal. La paella se ha vuelto muy popular en toda España y en muchos otros países, y se ha convertido en un símbolo de la cultura y la comida españolas.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 350,
      fats: 10,
      carbohydrates: 50,
      protein: 20,
      sodium: 500,
      fiber: 3
    },
    necessaryUtensils: [
      "Paellera o sartén grande",
      "Cuchillo",
      "Tijeras de cocina",
      "Tabla de cortar",
      "Cuchara de madera",
      "Espátula",
      "Horno (opcional)"
    ]
  },
  {
    id: 52,
    name: "Tortilla de patatas",
    country: "España",
    region: "",
    ingredients: [
      "Patatas",
      "huevos",
      "aceite de oliva",
      "sal"
    ],
    recipe: "Para preparar una tortilla de patatas, primero se pelan y se cortan las patatas en rodajas finas. A continuación, se fríen en una sartén con aceite de oliva hasta que estén doradas. Mientras tanto, se baten los huevos en un recipiente y se les añade una pizca de sal. Se añaden las patatas fritas a la mezcla de huevos y se revuelve bien. Se vuelca la mezcla de nuevo en la sartén y se cocina a fuego medio durante unos 5 minutos, hasta que la tortilla esté dorada y cuajada. Se sirve caliente o fría, cortada en rodajas.",
    otherNames: ["Tortilla española", "Tortilla de patatas fritas"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "La tortilla de patatas es uno de los platos más populares y típicos de la cocina española. Se dice que fue creada por los campesinos del norte de España en el siglo XIX como una forma de aprovechar las patatas, que eran un cultivo abundante y económico en la región. La tortilla se ha vuelto muy popular en toda España y en muchos otros países, y se ha convertido en un plato tradicional de la cocina española.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 200,
      fats: 15,
      carbohydrates: 20,
      protein: 6,
      sodium: 300,
      fiber: 2
    },
    necessaryUtensils: [
      "Sartén",
      "Tijeras de cocina",
      "Tabla de cortar",
      "Cuchillo",
      "Recipiente para batir huevos"
    ]
  },
  {
    id: 53,
    name: "Gazpacho reina",
    country: "España",
    region: "Andalucía",
    ingredients: [
      "tomate",
      "pepino",
      "pimiento verde",
      "pimiento rojo",
      "cebolla",
      "ajo",
      "pan",
      "aceite de oliva",
      "vinagre",
      "sal"
    ],
    recipe: "Para preparar un gazpacho reina, se comienza por pelar y picar los tomates, el pepino, los pimientos, la cebolla y el ajo. Se pone todo en un recipiente grande y se añade el pan desmigado, el aceite de oliva, el vinagre y una pizca de sal. Se mezcla bien y se deja reposar en la nevera durante al menos una hora para que los ingredientes se macenen. Antes de servir, se tritura la mezcla hasta obtener una consistencia suave. Se sirve frío, añadiendo un poco de agua si es necesario para ajustar la consistencia.",
    otherNames: ["Gazpacho andaluz", "Sopa fría"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "El gazpacho es un plato tradicional de Andalucía, en España. Se dice que tiene sus raíces en la época romana, cuando se mezclaba agua con vinagre y aceite para crear una sopa fría. Durante la época árabe, se añadieron ingredientes como el pepino y el tomate. El gazpacho se hizo muy popular en toda España durante el siglo XX, y se ha convertido en un plato típico de la cocina andaluza.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 100,
      fats: 8,
      carbohydrates: 10,
      protein: 2,
      sodium: 200,
      fiber: 2
    },
    necessaryUtensils: [
      "Tijeras de cocina",
      "Tabla de cortar",
      "Cuchillo",
      "Recipiente grande",
      "Triturador o licuadora"
    ]
  },
  {
    id: 54,
    name: "Croquetas",
    country: "España",
    region: "",
    ingredients: [
      "pan rallado",
      "huevo",
      "Harina",
      "leche",
      "caldo de pollo",
      "pimiento verde",
      "pimiento rojo",
      "cebolla",
      "ajo",
      "sofrito (cebolla, pimiento, ajo, tomate)",
      "sal",
      "aceite de oliva"
    ],
    recipe: "Para preparar croquetas, se comienza por hacer un roux (mezcla de harina y mantequilla) en una cacerola. A continuación, se añade la leche y el caldo de pollo y se remueve hasta que espese. Se añaden el sofrito y la carne picada (puede ser pollo, cerdo, ternera o jamón) y se revuelve bien. Se retira del fuego y se deja enfriar. Una vez frío, se forma la masa en forma de croquetas y se pasan por pan rallado. Se fríen las croquetas en aceite caliente hasta que estén doradas. Se escurren sobre papel de cocina y se sirven calientes.",
    otherNames: ["Croquetas de carne", "Croquetas de pollo"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "Las croquetas son un plato muy popular en España y se han convertido en un aperitivo típico en muchos restaurantes y bares del país. Se dice que fueron creadas por los cocineros de la reina Isabel II en el siglo XIX. Las croquetas se han vuelto muy populares en toda España y en muchos otros países, y se han convertido en un plato tradicional de la cocina española.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 300,
      fats: 20,
      carbohydrates: 30,
      protein: 15,
      sodium: 400,
      fiber: 2
    },
    necessaryUtensils: [
      "Cacerola",
      "Tijeras de cocina",
      "Tabla de cortar",
      "Cuchillo",
      "Sartén",
      "Papel de cocina"
    ]
  },
  {
    id: 55,
    name: "Churros con chocolate",
    country: "España",
    region: "",
    ingredients: [
      "Harina",
      "agua",
      "sal",
      "aceite de oliva",
      "azúcar",
      "chocolate",
      "leche"
    ],
    recipe: "Para preparar churros con chocolate, se comienza por mezclar la harina, el agua y una pizca de sal en un recipiente hasta obtener una masa suave. Se calienta el aceite en una sartén o freidora a 180 grados Celsius. Se introduce la masa en una manga pastelera con boquilla redonda y se fríen los churros hasta que estén dorados. Se escurren sobre papel de cocina y se espolvorean con azúcar. Mientras tanto, se derrite el chocolate con la leche en un cazo a fuego medio. Se sirven los churros calientes con el chocolate caliente para mojar.",
    otherNames: ["Porras", "Donuts"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "Los churros con chocolate son un plato muy popular en España y se han convertido en un postre típico en muchos restaurantes y bares del país. Se dice que fueron creados por los gitanos españoles en el siglo XVIII y se hicieron muy populares durante la época romántica. Los churros con chocolate se han vuelto muy populares en toda España y en muchos otros países, y se han convertido en un plato tradicional de la cocina española.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 50,
      protein: 10,
      sodium: 300,
      fiber: 2
    },
    necessaryUtensils: [
      "Sartén o freidora",
      "Manga pastelera",
      "Cazo",
      "Tijeras de cocina",
      "Tabla de cortar",
      "Cuchillo",
      "Papel de cocina"
    ]
  },
  {
    id: 56,
    name: "Fabada asturiana",
    country: "España",
    region: "Asturias",
    ingredients: [
      "Habas",
      "chorizo",
      "Cecina",
      "Tocino",
      "Pulpo",
      "chorizo",
      "Morcilla",
      "caldo de carne",
      "sal"
    ],
    recipe: "Para preparar fabada asturiana, se remoja la haba durante la noche y se cocina en agua hirviendo durante aproximadamente una hora. Mientras tanto, se cuece el chorizo, la cecina, el tocino y el pulpo en agua hirviendo durante unos 20 minutos. Se fríen las morcillas en una sartén con aceite caliente. Una vez cocidos, se añaden todos los ingredientes a una cacerola grande y se cubren con caldo de carne. Se deja cocinar a fuego lento durante unas 3 horas, hasta que la haba esté tierna. Se rectifica la sazón y se sirve caliente.",
    otherNames: ["Fabada", "Habada"],
    cookingTime: {
      minTime: 4,
      maxTime: 5
    },
    history: "La fabada asturiana es un plato típico de la región de Asturias, en España. Se dice que tiene sus raíces en la época romana, cuando se consumían habas cocidas con otros ingredientes. Durante la época árabe, se añadieron ingredientes como el chorizo y la morcilla. La fabada se hizo muy popular en toda España durante el siglo XIX y se ha convertido en un plato tradicional de la cocina asturiana.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 1000,
      fats: 70,
      carbohydrates: 100,
      protein: 50,
      sodium: 500,
      fiber: 10
    },
    necessaryUtensils: [
      "Olla grande",
      "Sartén",
      "Tijeras de cocina",
      "Tabla de cortar",
      "Cuchillo"
    ]
  },
  {
    id: 57,
    name: "Pollo al ajillo",
    country: "España",
    region: "",
    ingredients: [
      "pollo",
      "ajo",
      "Vino blanco",
      "caldo de pollo",
      "sal",
      "pimienta",
      "aceite de oliva"
    ],
    recipe: "Para preparar pollo al ajillo, se comienza por cortar el pollo en trozos y se fríe en una sartén con aceite de oliva hasta que esté dorado. Se retira del fuego y se reserva. En la misma sartén, se fríen los dientes de ajo picados hasta que estén dorados. Se añade el vino blanco y se deja reducir. A continuación, se añade el caldo de pollo y se deja cocinar durante unos 20 minutos. Se añade el pollo y se deja cocinar durante unos 10 minutos más. Se rectifica la sazón y se sirve caliente.",
    otherNames: ["pollo a la sidra"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "El pollo al ajillo es un plato muy popular en España y se ha convertido en un plato tradicional de la cocina española. Se dice que tiene sus raíces en la época romana, cuando se cocían aves en aceite de oliva con ajo y vino. Durante la época árabe, se añadieron ingredientes como el caldo de pollo. El pollo al ajillo se hizo muy popular en toda España durante el siglo XVIII y se ha convertido en un plato típico de la cocina española.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 600,
      fats: 40,
      carbohydrates: 10,
      protein: 50,
      sodium: 300,
      fiber: 2
    },
    necessaryUtensils: [
      "Sartén",
      "Tijeras de cocina",
      "Tabla de cortar",
      "Cuchillo"
    ]
  },
  {
    id: 58,
    name: "Pulpo a la gallega",
    country: "España",
    region: "Galicia",
    ingredients: [
      "pulpo",
      "papas",
      "pimentón",
      "aceite de oliva",
      "sal"
    ],
    recipe: "Para preparar el pulpo a la gallega, primero debes cocer el pulpo en agua hirviendo durante unos 20-30 minutos. Luego, corta las papas en rodajas finas y fríelas en aceite de oliva hasta que estén doradas. Añade el pimentón al aceite y mezcla bien. Agrega el pulpo cocido y cortado en rodajas y saltéalo durante unos minutos más. Sirve caliente, añadiendo un poco de sal al gusto.",
    otherNames: [
      "Pulpo á feira",
      "Pulpo á moda da Auga",
      "Pulpo á moda do Porto"
    ],
    cookingTime: {
      minTime: 0.5,
      maxTime: 40
    },
    history: "El pulpo a la gallega es un plato tradicional de la región de Galicia, en el noroeste de España. Se dice que el plato tiene sus orígenes en las ferias de pulpo que se celebraban en la región desde hace siglos, donde se vendía pulpo cocido y acompañado de papas fritas y pimentón. Con el tiempo, el plato se popularizó y se convirtió en uno de los más representativos de la culinaria gallega.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 125,
      fats: 1,
      carbohydrates: 2,
      protein: 25,
      sodium: 90,
      fiber: 0
    },
    necessaryUtensils: [
      "olla",
      "sartén",
      "cuchillo",
      "tenedor"
    ]
  },
  {
    id: 59,
    name: "Cocido Madrileño",
    country: "España",
    region: "Madrid",
    ingredients: [
      "garbanzos",
      "pollo",
      "ternera",
      "tocino",
      "chorizo",
      "morcilla",
      "verduras (cabbage, carrots, turnips, leeks)",
      "pimientos asados",
      "chucrut"
    ],
    recipe: "Para preparar el cocido madrileño, primero debes remojar los garbanzos en agua durante al menos 8 horas o una noche. Luego, coloca los garbanzos, el pollo, la ternera, el tocino, el chorizo, la morcilla y las verduras en una olla grande con agua suficiente para cubrirlos. Añade sal al gusto y deja cocinar a fuego medio durante unas 3 horas o hasta que los garbanzos estén suaves. Mientras tanto, asa los pimientos y corta en rodajas finas. Sirve el cocido en tres platos diferentes: en el primero, coloca los garbanzos y las verduras; en el segundo, el chorizo, la morcilla y el tocino; y en el tercero, el pollo y la ternera. Acompaña con los pimientos asados y chucrut.",
    otherNames: [],
    cookingTime: {
      minTime: 240,
      maxTime: 300
    },
    history: "El cocido madrileño es un plato tradicional de la región de Madrid, en España. Se trata de un guiso de garbanzos, pollo, ternera, tocino, chorizo, morcilla y verduras, que se cocina lentamente durante varias horas. El plato tiene sus orígenes en la época medieval, cuando se utilizaba como alimento principal para los trabajadores durante la semana. Con el tiempo, el cocido madrileño se convirtió en uno de los platos más representativos de la culinaria madrileña y es muy popular en toda España.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 1200,
      fats: 50,
      carbohydrates: 150,
      protein: 50,
      sodium: 1000,
      fiber: 20
    },
    necessaryUtensils: [
      "olla grande",
      "cuchillo",
      "tenedor",
      "estufa"
    ]
  },
  {
    id: 60,
    name: "chorizo a la Sidra",
    country: "España",
    region: "Asturias",
    ingredients: [
      "chorizo",
      "sidra",
      "cebolla",
      "ajo",
      "aceite de oliva",
      "sal"
    ],
    recipe: "Para preparar el chorizo a la sidra, primero debes cortar el chorizo en rodajas finas. En una sartén caliente, añade un poco de aceite de oliva y fríe el chorizo a fuego medio hasta que esté dorado. Agrega la cebolla y el ajo picados y saltéalos durante unos minutos más. Añade un poco de sidra y deja cocinar a fuego medio durante unos 5-10 minutos más. Sirve caliente, añadiendo un poco de sal al gusto.",
    otherNames: [
      "chorizo á sidra"
    ],
    cookingTime: {
      minTime: 0.25,
      maxTime: 0.3
    },
    history: "El chorizo a la sidra es un plato tradicional de la región de Asturias, en el norte de España. Se trata de una preparación de chorizo frito acompañado de sidra, cebolla y ajo, que se cocina en una sartén durante unos minutos. El plato es muy popular en Asturias y es típico de la gastronomía de la región.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 300,
      fats: 25,
      carbohydrates: 10,
      protein: 15,
      sodium: 1000,
      fiber: 2
    },
    necessaryUtensils: [
      "sartén",
      "cuchillo",
      "tenedor"
    ]
  },
  {
    id: 61,
    name: "Chiles en nogada",
    country: "México",
    region: "Puebla",
    ingredients: ["chiles poblanos", "carne molida", "manzana", "pera", "durazno", "ciruela", "uva", "nuez", "cilantro", "canela", "clavo", "almendras", "queso crema", "crema", "leche", "azúcar", "sal"],
    recipe: "Para preparar los chiles en nogada, primero se deben asar los chiles poblanos hasta que estén suaves y luego se les quita la piel y se les abre para rellenarlos con la mezcla de carne molida, frutas picadas y especias. Luego se cierran los chiles y se cubren con una salsa de nuez hecha con queso crema, crema, leche y azúcar. Finalmente, se adornan con cilantro y se sirven calientes.",
    otherNames: ["chiles poblanos rellenos de carne", "chiles en crema"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "El chiles en nogada es un platillo tradicional de México que se originó en la ciudad de Puebla en el siglo XIX. Se dice que fue creado por las monjas del convento de Santa Mónica para agasajar al general Agustín de Iturbide cuando visitó la ciudad después de la independencia de México. Los colores de la bandera mexicana (verde, blanco y rojo) se reflejan en los chiles verdes cubiertos con salsa blanca y adornados con granos de granada roja.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 350,
      fats: 25,
      carbohydrates: 20,
      protein: 10,
      sodium: 300,
      fiber: 3
    },
    necessaryUtensils: ["asador", "cuchillo", "tenedor", "cacerola", "tijeras de cocina", "molinillo de especias"]
  },
  {
    id: 62,
    name: "Pozole",
    country: "México",
    region: "Guerrero",
    ingredients: ["maíz", "carne de cerdo", "chile ancho", "chile guajillo", "chile cascabel", "cebolla", "ajo", "comino", "oregano", "hojas de epazote", "sal"],
    recipe: "Para preparar el pozole, primero se debe cocer el maíz y la carne de cerdo hasta que estén bien cocidos. Luego se hace una salsa con chiles ancho, guajillo y cascabel, cebolla, ajo, comino, oregano y epazote, y se agrega a la olla junto con la carne y el maíz. Se deja cocinar a fuego lento durante unas horas hasta que la salsa se espese y se mezclen bien todos los sabores. Finalmente, se sirve caliente y se adorna con cebolla, lechuga y limón.",
    otherNames: ["caldo de maíz", "caldo blanco"],
    cookingTime: {
      minTime: 3,
      maxTime: 4
    },
    history: "El pozole es un platillo tradicional de México que se originó en la región de Guerrero y se preparaba con maíz y carne de cerdo. Se dice que era un platillo ritual que se servía en ceremonias religiosas y que fue llevado a otras partes de México por los españoles en la época colonial.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 450,
      fats: 30,
      carbohydrates: 40,
      protein: 20,
      sodium: 400,
      fiber: 5
    },
    necessaryUtensils: ["olla grande", "cuchillo", "tenedor", "tijeras de cocina", "molinillo de especias"]
  },
  {
    id: 63,
    name: "Tacos al pastor",
    country: "México",
    region: "Distrito Federal",
    ingredients: ["carne de cerdo", "pimiento rojo", "cebolla", "piña", "ajo", "comino", "orégano", "chile guajillo", "chile ancho", "pimienta", "azúcar", "limón", "tortillas de maíz", "cilantro", "pina"],
    recipe: "Para preparar los tacos al pastor, se marina la carne de cerdo con pimiento rojo, cebolla, piña, ajo, comino, orégano, chile guajillo, chile ancho, pimienta, azúcar y limón. Luego se cocina en una trompo o asador giratorio y se corta en rodajas finas. Finalmente, se sirve en tortillas de maíz calientes y se adorna con cilantro y piña.",
    otherNames: ["tacos de trompo", "tacos de pastor"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "Los tacos al pastor son un platillo tradicional de México que se originó en el Distrito Federal a partir de la influencia de los inmigrantes libaneses en la década de 1950. La forma en que se cocina la carne en un trompo o asador giratorio es similar a la forma en que se cocina el shawarma en el Líbano. Los tacos al pastor se han popularizado en  y son uno de los tacos más populares en México.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 300,
      fats: 20,
      carbohydrates: 25,
      protein: 15,
      sodium: 200,
      fiber: 2
    },
    necessaryUtensils: ["trompo", "cuchillo", "tenedor", "plancha", "cacerola", "molinillo de especias"]
  },
  {
    id: 64,
    name: "Enchiladas",
    country: "México",
    region: "Distrito Federal",
    ingredients: ["tortillas de maíz", "carne molida", "cebolla", "ajo", "tomate", "chile ancho", "chile guajillo", "caldo de pollo", "queso cheddar", "crema", "cilantro"],
    recipe: "Para preparar las enchiladas, se fríe la tortilla de maíz en aceite caliente hasta que esté ligeramente crujiente. Luego se rellena con una mezcla de carne molida, cebolla, ajo, tomate y chiles. Se cubre con una salsa hecha a partir de chiles guajillo y ancho cocidos en caldo de pollo y se espolvorea con queso cheddar. Finalmente, se hornea hasta que el queso esté derretido y se sirve caliente, adornado con crema y cilantro.",
    otherNames: ["tacos de enchiladas"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "Las enchiladas son un platillo tradicional de México que se originó en el Distrito Federal. Se dice que fueron creadas por los españoles que llegaron a México en el siglo XVI y adaptaron sus recetas de tortillas rellenas con ingredientes locales como carne, chiles y queso. Las enchiladas se han vuelto populares en  y hay muchas variedades diferentes, dependiendo de la región y los ingredientes disponibles.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 400,
      fats: 30,
      carbohydrates: 25,
      protein: 15,
      sodium: 250,
      fiber: 3
    },
    necessaryUtensils: ["sartén", "cuchillo", "tenedor"]
  },
  {
    id: 65,
    name: "Chiles rellenos",
    country: "México",
    region: "yucatán",
    ingredients: ["chiles poblano", "carne molida", "cebolla", "tomate", "cilantro", "queso", "huevo", "harina", "aceite"],
    recipe: "Para preparar los chiles rellenos, primero se deben cocer los chiles poblano hasta que estén suaves y luego se les retira la piel. Luego, se rellenan con la mezcla de carne molida, cebolla, tomate, cilantro y queso, y se cierran con un palillo. Para cocerlos, se baten los huevos y se mezclan con harina para hacer una masa. Luego, se pasan los chiles rellenos por la masa y se fríen en aceite caliente hasta que estén dorados. Para servir, se acompañan con salsa y cebolla picada.",
    otherNames: ["chiles poblanos rellenos"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "Los chiles rellenos tienen su origen en la península de yucatán, donde se utilizan principalmente chiles poblano para prepararlos. Se dice que fueron creados por los mayas y que se han adaptado a diferentes tipos de relleno a lo largo de los años, utilizando ingredientes de la región como carne, cebolla, tomate y cilantro.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      protein: 15,
      carbohydrates: 20,
      sodium: 150,
      fiber: 2
    },
    necessaryUtensils: ["olla", "sartén", "batidor", "cuchillo"]
  },
  {
    id: 66,
    name: "Mole poblano",
    country: "México",
    region: "Puebla",
    ingredients: ["carne de pollo", "chiles secos", "tomate", "ajos", "cebolla", "cacao", "canela", "clavo", "almendras", "pimienta"],
    recipe: "Para preparar el mole poblano, primero se deben asar los chiles secos y luego se remojan en agua caliente para suavizarlos. Luego, se mezclan con tomate, ajos, cebolla, cacao, canela, clavo, almendras y pimienta, y se procesan hasta obtener una salsa fina. Se cocina la carne de pollo en agua con cebolla y se agrega la salsa de mole. Se deja cocinar a fuego lento durante unos minutos, hasta que la carne esté tierna y la salsa esté espesa. Para servir, se acompaña con arroz blanco y cebolla picada.",
    otherNames: ["mole de pollo"],
    cookingTime: {
      minTime: 45,
      maxTime: 60
    },
    history: "El mole poblano tiene su origen en la ciudad de Puebla, donde se dice que fue creado por las monjas del convento de Santa Rosa en el siglo XVII. La receta original utilizaba más de 20 ingredientes diferentes, incluyendo chiles secos, frutas secas, especias y cacao, lo que le daba un sabor único y complejo. Actualmente, es uno de los platillos más representativos de la gastronomía mexicana.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 150,
      fats: 10,
      carbohydrates: 20,
      protein: 20,
      sodium: 50,
      fiber: 2
    },
    necessaryUtensils: ["olla", "licuadora", "cuchillo", "tenedor"]
  },
  {
    id: 67,
    name: "Tostadas de tinga",
    country: "México",
    region: "Puebla",
    ingredients: ["tortilla", "carne de cerdo", "cebolla", "tomate", "chile chipotle", "queso", "crema", "cilantro"],
    recipe: "Para preparar las tostadas de tinga, primero se deben cocer las tortillas en aceite caliente hasta que estén crujientes y luego se les retira del aceite. Luego, se prepara una mezcla de carne de cerdo cocida, cebolla, tomate, chile chipotle y cilantro, y se coloca sobre las tortillas. Se cubren con queso y crema, y se sirven calientes, acompañadas de cebolla picada y cilantro fresco.",
    otherNames: ["tostadas de cerdo"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "Las tostadas de tinga tienen su origen en el estado de Puebla, donde se utilizan principalmente chiles chipotle para prepararlas. Se dice que fueron creadas por los aztecas y que se han adaptado a diferentes tipos de carne a lo largo de los años, utilizando ingredientes de la región como cebolla, tomate y cilantro.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 20,
      protein: 10,
      sodium: 400,
      fiber: 2
    },
    necessaryUtensils: ["sartén", "horno", "tenedor", "cuchillo"]
  },
  {
    id: 68,
    name: "Quesadillas de Hongos",
    country: "México",
    region: "Hidalgo",
    ingredients: ["tortilla de maíz", "hongos", "cebolla", "ajos", "chile jalapeño", "queso cheddar", "aceite de oliva", "sal", "pimienta"],
    recipe: "1. Primero, se fríen los hongos en una sartén con un poco de aceite de oliva hasta que estén bien cocidos. Luego, se retiran del fuego y se cortan en pedazos pequeños. 2. En la misma sartén, se fríe la cebolla y los ajos hasta que estén transparentes. Luego, se añade el chile jalapeño y se revuelve bien para mezclar todos los ingredientes. 3. Se coloca una tortilla de maíz en la sartén y se cubre con una capa generosa de queso cheddar y la mezcla de hongos. Luego, se cubre con otra tortilla de maíz y se fríe hasta que el queso esté derretido y la tortilla esté dorada. 4. Se corta en cuartos y se sirve caliente, acompañado de salsa verde o roja y crema agria. ",
    otherNames: ["sincronizadas de hongos"],
    cookingTime: {
      minTime: 0.25,
      maxTime: 0.3
    },
    history: "Las Quesadillas de Hongos son un platillo tradicional mexicano que se originó en la región de Hidalgo. Se dice que fueron creadas por campesinos que utilizaban hongos como una fuente de proteína y sabor en lugar de carne, ya que ésta era costosa y difícil de conseguir en la zona. ",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 250,
      fats: 12,
      protein: 10,
      carbohydrates: 30,
      sodium: 400,
      fiber: 2
    },
    necessaryUtensils: ["sartén", "cuchillo", "tabla de cortar"]
  },
  {
    id: 69,
    name: "Tortas de Camarón",
    country: "México",
    region: "Sinaloa",
    ingredients: ["camarones", "harina de trigo", "huevo", "cebolla", "ajo", "chile jalapeño", "cilantro", "limón", "aceite de oliva", "sal", "pimienta"],
    recipe: "1. Primero, se limpian y se desvenan los camarones y se mezclan con la harina de trigo, el huevo, la cebolla, el ajo, el chile jalapeño y el cilantro. Luego, se dejan reposar en la nevera durante unos 30 minutos. 2. En una sartén caliente, se fríen las tortas de camarón en aceite de oliva hasta que estén doradas por ambos lados. 3. Se sirven calientes, espolvoreadas con un poco de sal y pimienta y acompañadas de limón y salsa picante. ",
    otherNames: ["tacos de camarón", "tortas de camarón al horno"],
    cookingTime: {
      minTime: 20,
      maxTime: 30
    },
    history: "Las Tortas de Camarón son un platillo tradicional mexicano que se originó en la región de Sinaloa. Se dice que fueron creadas por pescadores que utilizaban los camarones que pescaban como ingrediente principal en sus tortas. Actualmente, son una comida típica en la región y se pueden encontrar en casi cualquier lugar. ",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      protein: 20,
      carbohydrates: 30,
      sodium: 500,
      fiber: 2
    },
    necessaryUtensils: ["sartén", "cuchillo", "tabla de cortar", "tazón"]
  },
  {
    id: 70,
    name: "Birria de borrego",
    country: "México",
    region: "Jalisco",
    ingredients: ["borrego", "chile guajillo", "chile de árbol", "ajo", "comino", "clavo", "canela", "orégano", "tomate", "cebolla"],
    recipe: "Para preparar birria de borrego, se cuece la carne de borrego en agua con una mezcla de chiles secos, ajo, comino, clavo, canela y orégano hasta que esté bien tierna. Luego, se desmenuza la carne y se mezcla con una salsa de tomate y cebolla. Se sirve caliente en una cazuela de barro, acompañado de tortillas de maíz y otros ingredientes al gusto, como cebolla, cilantro y limón.",
    otherNames: ["birria de chivo"],
    cookingTime: {
      minTime: 4,
      maxTime: 8
    },
    history: "La birria de borrego es un platillo típico de la región de Jalisco, en el occidente de México. Se trata de un guiso de carne de borrego cocida en una salsa de chiles secos y especias, que se sirve caliente en una cazuela de barro. La birria se prepara especialmente en ocasiones especiales, como bodas y fiestas, y se acompaña de tortillas de maíz y otros ingredientes al gusto.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 410,
      fats: 23,
      carbohydrates: 29,
      protein: 24,
      sodium: 920,
      fiber: 5
    },
    necessaryUtensils: ["olla", "cazuela de barro", "cuchillo", "tabla de cortar"]
  },
  {
    id: 71,
    name: "Torta ahogada",
    country: "México",
    region: "Jalisco",
    ingredients: ["carne de cerdo", "chile de árbol", "ajo", "comino", "clavo", "canela", "orégano", "pan de telera", "salsa de tomate", "cebolla"],
    recipe: "Para preparar una torta ahogada, se cuece la carne de cerdo en agua con una mezcla de chiles secos, ajo, comino, clavo, canela y orégano hasta que esté bien tierna. Luego, se desmenuza la carne y se mezcla con una salsa de tomate y cebolla. Se coloca la carne en un pan de telera y se cubre con más salsa. Se sirve caliente, bañada en una salsa especial de chile de árbol y caldo de carne, y se acompaña de otros ingredientes al gusto, como cebolla, cilantro y limón.",
    otherNames: ["torta de carnitas"],
    cookingTime: {
      minTime: 4,
      maxTime: 8
    },
    history: "La torta ahogada es un platillo típico de la región de Jalisco, en el occidente de México. Se trata de una torta de pan rellena con carne de cerdo cocida en una salsa de chiles secos y especias, que se sirve bañada en una salsa de chile de árbol y caldo de carne. La torta ahogada se prepara especialmente en ocasiones especiales, como bodas y fiestas, y se acompaña de otros ingredientes al gusto.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 570,
      fats: 33,
      carbohydrates: 43,
      protein: 24,
      sodium: 1320,
      fiber: 5
    },
    necessaryUtensils: ["olla", "cuchillo", "tabla de cortar", "sartén"]
  },
  {
    id: 72,
    name: "Chimichanga",
    country: "México",
    region: "Norte",
    ingredients: ["carne de res", "chile guajillo", "chile de árbol", "ajo", "comino", "clavo", "canela", "orégano", "frijoles", "tortillas de harina", "aceite de maíz"],
    recipe: "Para preparar una chimichanga, se cuece la carne de res en agua con una mezcla de chiles secos, ajo, comino, clavo, canela y orégano hasta que esté bien tierna. Luego, se desmenuza la carne y se mezcla con frijoles cocidos. Se coloca la carne y los frijoles en una tortilla de harina y se envuelve en forma de burrito. Se fríe en aceite de maíz hasta que esté dorada y crujiente. Se sirve caliente, acompañada de salsa de tomate y otros ingredientes al gusto, como cebolla, cilantro y queso rallado.",
    otherNames: ["chimmy"],
    cookingTime: {
      minTime: 4,
      maxTime: 8
    },
    history: "La chimichanga es un platillo típico del norte de México, especialmente en la región fronteriza con Estados Unidos. Se trata de un burrito frito relleno de carne de res y frijoles, que se sirve caliente acompañado de salsa de tomate y otros ingredientes al gusto. La chimichanga se popularizó en la década de 1920, cuando se empezó a servir en restaurantes y taquerías en la ciudad de Tucson, Arizona.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 530,
      fats: 28,
      carbohydrates: 45,
      protein: 24,
      sodium: 1320,
      fiber: 5
    },
    necessaryUtensils: ["olla", "sartén", "cuchillo", "tabla de cortar"]
  },
  {
    id: 73,
    name: "carne asada",
    country: "México",
    region: "Norte",
    ingredients: ["carne de res", "chile jalapeño", "ajo", "sal", "limón"],
    recipe: "Para preparar la carne asada, primero marinar la carne con el chile jalapeño, el ajo y la sal durante unas horas. Después, calentar una parrilla o sartén hasta que esté muy caliente y cocinar la carne a fuego alto durante unos minutos por cada lado, hasta que esté bien cocida por dentro. Servir la carne acompañada con limón y una guarnición de verduras a la parrilla.",
    otherNames: ["carne a la parrilla"],
    cookingTime: {
      minTime: 0.25,
      maxTime: 120
    },
    history: "La carne asada es un platillo tradicional de la región norte de México, que se originó en la época precolombina cuando los pueblos indígenas de la región comenzaron a asar la carne sobre brasas. Con el tiempo, esta tradición se ha mantenido y ha evolucionado para convertirse en uno de los platos más populares del norte de México.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 35,
      carbohydrates: 0,
      protein: 30,
      sodium: 500,
      fiber: 0
    },
    necessaryUtensils: ["parrilla o sartén", "cuchillo", "tabla de cortar"]
  },
  {
    id: 74,
    name: "Taco de pescado",
    country: "México",
    region: "Sur",
    ingredients: ["filete de pescado", "tortilla de maíz", "cebolla", "cilantro", "limón"],
    recipe: "Para preparar los tacos de pescado, primero marinar el filete de pescado con limón y sal durante unos minutos. Después, calentar una sartén con aceite y cocinar el pescado hasta que esté bien cocido por dentro. Mientras tanto, calentar las tortillas de maíz en un comal o sartén. Cuando el pescado esté listo, servirlo en las tortillas calientes y añadir cebolla y cilantro picados. Servir los tacos de pescado acompañados de limón y salsa picante al gusto.",
    otherNames: ["taco de pescado al carbon"],
    cookingTime: {
      minTime: 10,
      maxTime: 0.3
    },
    history: "Los tacos de pescado son un platillo típico de la región sur de México, especialmente en el estado de Veracruz. La preparación de este platillo se originó en la época prehispánica, cuando los pueblos indígenas de la región comenzaron a consumir pescado y a cocinarlo de diversas maneras. Con el tiempo, el taco de pescado se ha convertido en uno de los platos más populares de la costa del Golfo de México.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 250,
      fats: 10,
      carbohydrates: 30,
      protein: 20,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: ["sartén", "comal", "cuchillo", "tabla de cortar"]
  },
  {
    id: 75,
    name: "Esquites",
    country: "México",
    region: "Centro",
    ingredients: ["maíz", "chalote", "chile jalapeño", "cilantro", "limón", "queso", "mayonesa", "chile en polvo"],
    recipe: "Para preparar los esquites, primero se cocina el maíz en agua con sal hasta que esté tierno. Después, se retira del agua y se deja enfriar un poco. Mientras tanto, se sofríe el chalote y el chile jalapeño en una sartén con un poco de aceite hasta que estén bien dorados. Cuando el maíz esté tibio, se mezcla con el chalote y el chile jalapeño y se agrega cilantro picado, limón y queso rallado. Servir los esquites en tazones o tazas individuales y añadir mayonesa y chile en polvo al gusto.",
    otherNames: ["maíz en taza", "maíz esquites"],
    cookingTime: {
      minTime: 0.25,
      maxTime: 30
    },
    history: "Los esquites son un platillo típico de la región central de México, especialmente en el estado de México. Se cree que este platillo se originó en la época precolombina, cuando los pueblos indígenas de la región comenzaron a consumir maíz cocido y a prepararlo de diversas maneras. Con el tiempo, el esquite se ha convertido en uno de los platos más populares de las calles mexicanas y se puede encontrar en casi cualquier ciudad del país.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 150,
      fats: 10,
      carbohydrates: 15,
      protein: 5,
      sodium: 100,
      fiber: 2
    },
    necessaryUtensils: ["olla", "sartén", "cuchillo", "tabla de cortar"]
  },
  {
    id: 76,
    name: "Cochinita pibil",
    country: "México",
    region: "yucatán",
    ingredients: ["carne de cerdo", "achiote", "chile habanero", "caldo de pollo", "limón", "cilantro", "tortilla de maíz"],
    recipe: "Para preparar la cochinita pibil, se mezcla la carne de cerdo con achiote, chile habanero y caldo de pollo en una olla grande. Se deja marinar durante unas horas o incluso durante un día completo. Después, se coloca la carne en una olla de barro o en una parrilla y se asa lentamente a fuego bajo, cubierta con hojas de plátano o papel de aluminio, hasta que esté bien cocida y tierna. Servir la cochinita pibil en tortillas de maíz calientes y añadir limón y cilantro picado al gusto.",
    otherNames: ["carne pibil", "puerco pibil"],
    cookingTime: {
      minTime: 8,
      maxTime: 24
    },
    history: "La cochinita pibil es un platillo tradicional de la región de yucatán, en el sureste de México. Se cree que este platillo se originó entre los pueblos mayas de la región, que utilizaban el método de cocción pibil para cocinar la carne de cerdo entera. Con el tiempo, la cochinita pibil se ha convertido en uno de los platos más representativos de la comida yucateca y se puede encontrar en casi cualquier restaurante de la región.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 450,
      fats: 30,
      carbohydrates: 30,
      protein: 25,
      sodium: 500,
      fiber: 5
    },
    necessaryUtensils: ["olla", "parrilla", "cuchillo", "tabla de cortar"]
  },
  {
    id: 77,
    name: "Parrillada Jalisco",
    country: "México",
    region: "Jalisco",
    ingredients: [
      "carne de res",
      "chorizo",
      "tocino",
      "cebolla",
      "tomate",
      "aji pepper",
      "pimiento"
    ],
    recipe: "Para preparar esta parrillada jalisciense, comience por asar la carne de res y el chorizo a la parrilla. Mientras tanto, corte la cebolla, el tomate y el pimiento en rodajas y fría el tocino en una sartén. Cuando la carne esté cocida, agréguele las verduras y el tocino a la parrilla y sazone con aji pepper. Sirva caliente.",
    otherNames: ["parrillada mexicana", "parrillada de Jalisco"],
    cookingTime: {
      minTime: 1,
      maxTime: 2
    },
    history: "La parrillada Jalisco es una comida típica de la región de Jalisco, en México. Se cree que se originó en la época colonial, cuando se utilizaban las parrillas para cocinar carne de res en la región. Con el tiempo, se fueron agregando otros ingredientes y se convirtió en el platillo que se conoce hoy en día.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 500,
      fats: 30,
      carbohydrates: 20,
      protein: 40,
      sodium: 200,
      fiber: 5
    },
    necessaryUtensils: ["parrilla", "sartén"]
  },
  {
    id: 78,
    name: "Ceviche",
    country: "Perú",
    region: "Varios",
    ingredients: [
      "pescado o mariscos",
      "limón",
      "cebolla",
      "ajo",
      "cilantro",
      "ají"
    ],
    recipe: "Para preparar ceviche, se corta el pescado o los mariscos en cubos y se marina en limón durante unos 30 minutos. Luego se mezcla con cebolla, ajo, cilantro y ají picado, y se sirve caliente o frío como entrante.",
    otherNames: ["Cebiche"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 1
    },
    history: "El ceviche es un plato tradicional en Perú, que se prepara desde la época precolombina. Se cree que fue llevado a América del Sur por los indígenas, quienes utilizaban el limón para conservar el pescado y mariscos y darles un sabor único.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 100,
      fats: 5,
      carbohydrates: 5,
      protein: 10,
      sodium: 0.5,
      fiber: 0
    },
    necessaryUtensils: [
      "Cuchillo",
      "Tenedor",
      "Tabla de cortar",
      "Recipiente grande"
    ]
  },
  {
    id: 79,
    name: "Lomo saltado",
    country: "Perú",
    region: "Lima",
    ingredients: ["lomo de cerdo", "tomate", "cebolla", "aji amarillo", "papa", "aceite de oliva", "vinagre", "salsa de soya", "aji panca", "culantro"],
    recipe: "Cortar el lomo de cerdo en tiras delgadas y sazonar con sal y pimienta. Cortar el tomate y la cebolla en cubos. Picar el aji amarillo y el culantro. Pelar y cortar la papa en rodajas delgadas. En una sartén caliente, calentar el aceite de oliva y agregar el lomo de cerdo. Cocinar hasta que esté dorado y retirar del fuego. En la misma sartén, agregar el tomate, la cebolla, el aji amarillo y la papa. Cocinar a fuego medio-alto durante unos 5 minutos, revolviendo constantemente. Agregar el vinagre, la salsa de soya y el aji panca picado. Mezclar bien y cocinar durante otros 5 minutos. Agregar el lomo de cerdo cocido y mezclar bien. Servir caliente, espolvoreado con culantro picado.",
    otherNames: ["saltado de lomo", "saltado de cerdo"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "El Lomo saltado es uno de los platillos más populares de la cocina peruana. Se cree que tiene sus raíces en la influencia china en la cocina peruana, ya que se asemeja a algunos platos chinos tradicionales. Se dice que fue creado por inmigrantes chinos que trabajaban en la construcción del Ferrocarril Central en la década de 1860. Con el tiempo, se convirtió en un platillo típico de Lima y se popularizó en .",
    punctuation: 4.8,
    nutritionalInformation: {
      calories: 400,
      fats: 20,
      carbohydrates: 30,
      protein: 20,
      sodium: 400,
      fiber: 3
    },
    necessaryUtensils: ["sartén", "cuchillo", "tabla de cortar"]
  },
  {
    id: 80,
    name: "ají de Gallina",
    country: "Perú",
    region: "",
    ingredients: ["carne de pollo", "ají", "leche", "pan rallado"],
    recipe: "Para preparar ají de gallina, se cuece la carne de pollo hasta que esté bien cocida. Luego, se deshuesa y se desmenuza en pedazos pequeños. Se prepara una salsa de ají, leche y pan rallado y se mezcla con la carne de pollo. Finalmente, se sirve caliente, acompañado de arroz blanco y papas fritas.",
    otherNames: ["pollo en ají", "ajiaco"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "El ají de gallina tiene su origen en la época colonial en Perú. Durante ese tiempo, se utilizaba carne de gallina en lugar de pollo y se cocinaba en una salsa de ají y leche de vaca. Con el tiempo, el platillo fue evolucionando y se convirtió en uno de los platos más populares y representativos de la cocina peruana.",
    punctuation: 4.3,
    nutritionalInformation: {
      calories: 350,
      fats: 20,
      carbohydrates: 30,
      protein: 20,
      sodium: 500,
      fiber: 3
    },
    necessaryUtensils: ["olla", "cuchillo", "tabla de cortar"]
  },
  {
    id: 81,
    name: "Causa Rellena",
    country: "Perú",
    region: "",
    ingredients: ["papa", "pollo", "atún", "camarones"],
    recipe: "Para preparar causa rellena, se cuecen las papas hasta que estén bien cocidas y se muelen en puré. Luego, se mezcla con mayonesa y se coloca en un molde en forma de cilindro. Se rellena con pollo, atún o camarones y se cubre con más puré de papa. Se decora con huevo duro picado y se sirve fría.",
    otherNames: ["papa rellena"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "La causa rellena tiene su origen en la época precolombina en Perú, cuando los pueblos indígenas utilizaban la papa como alimento básico. Con el tiempo, la causa se convirtió en un platillo tradicional y se servía en ocasiones especiales como bodas y fiestas religiosas. Durante la época colonial, se agregaron ingredientes como pollo y pescado para darle más sabor y variedad.",
    punctuation: 4.0,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 30,
      protein: 15,
      sodium: 500,
      fiber: 5
    },
    necessaryUtensils: ["olla", "molde", "cuchillo", "tabla de cortar"]
  },
  {
    id: 82,
    name: "arroz con Pato",
    country: "Perú",
    region: "",
    ingredients: ["arroz", "carne de pato", "verduras"],
    recipe: "Para preparar arroz con pato, se cocina el arroz en agua con sal hasta que esté bien cocido. Luego, se saltea la carne de pato en una sartén con aceite caliente junto con verduras como cebolla, pimiento y zanahoria. Se mezcla el arroz con la carne de pato y se sirve caliente.",
    otherNames: ["arroz con ancas de rana"],
    cookingTime: {
      minTime: 45,
      maxTime: 60
    },
    history: "El arroz con pato tiene su origen en la época colonial en Perú, cuando se introdujo el pato en la dieta local. Con el tiempo, el arroz con pato se convirtió en un platillo tradicional y se servía en ocasiones especiales como bodas y fiestas religiosas. Hoy en día, el arroz con pato es uno de los platos más populares y representativos de la cocina peruana.",
    punctuation: 4.1,
    nutritionalInformation: {
      calories: 400,
      fats: 20,
      carbohydrates: 40,
      protein: 20,
      sodium: 600,
      fiber: 4
    },
    necessaryUtensils: ["olla", "sartén", "cuchillo", "tabla de cortar"]
  },
  {
    id: 83,
    name: "Rocoto relleno",
    country: "Perú",
    region: "",
    ingredients: ["rocoto", "carne molida", "queso"],
    recipe: "Para preparar rocoto relleno, se cocinan los rocotos en agua hirviendo hasta que estén bien cocidos. Luego, se cortan por la mitad y se vacían de semillas y pieles. Se prepara un relleno de carne molida y queso y se coloca dentro de los rocotos. Finalmente, se hornean en el horno hasta que estén bien calientes y se sirven calientes.",
    otherNames: ["chile relleno"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "El rocoto relleno tiene su origen en la época precolombina en Perú, cuando los pueblos indígenas utilizaban el rocoto como uno de sus principales ingredientes en la cocina. Con el tiempo, el rocoto relleno se convirtió en un platillo tradicional y se servía en ocasiones especiales como bodas y fiestas religiosas. Durante la época colonial, se agregó el relleno de carne y queso para darle más sabor y variedad.",
    punctuation: 4.4,
    nutritionalInformation: {
      calories: 350,
      fats: 20,
      carbohydrates: 30,
      protein: 20,
      sodium: 500,
      fiber: 3
    },
    necessaryUtensils: ["olla", "cuchillo", "tabla de cortar", "horno"]
  },
  {
    id: 84,
    name: "Anticuchos",
    country: "Perú",
    region: "",
    ingredients: ["corazón de vaca", "aji panca", "aji amarillo", "cebolla", "pimiento"],
    recipe: "Para preparar anticuchos, se corta el corazón de vaca en trozos pequeños y se marina en una mezcla de aji panca, aji amarillo, cebolla y pimiento. Luego, se coloca en una parrilla caliente y se cocina hasta que esté bien cocido. Finalmente, se sirve caliente, acompañado de papas fritas y choclo.",
    otherNames: ["corazón a la parrilla"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 40
    },
    history: "Los anticuchos tienen su origen en la época precolombina en Perú, cuando los pueblos indígenas utilizaban el corazón de vaca como uno de sus principales ingredientes en la cocina. Con el tiempo, los anticuchos se convirtieron en un platillo tradicional y se servían en ocasiones especiales como bodas y fiestas religiosas. Durante la época colonial, se agregaron ingredientes como aji panca y aji amarillo para darle más sabor y variedad.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 30,
      protein: 15,
      sodium: 500,
      fiber: 5
    },
    necessaryUtensils: ["parrilla", "cuchillo", "tabla de cortar"]
  },
  {
    id: 85,
    name: "papa a la Huancaina",
    country: "Perú",
    region: "",
    ingredients: ["papa", "queso", "aji amarillo", "leche", "aceite"],
    recipe: "Para preparar papa a la huancaina, se cuecen las papas hasta que estén bien cocidas y se cortan en rodajas. Luego, se prepara una salsa de queso, aji amarillo, leche y aceite y se mezcla hasta que quede suave. Se colocan las rodajas de papa en un plato y se cubren con la salsa. Finalmente, se decora con huevo duro picado y se sirve fría.",
    otherNames: ["papa con salsa huancaína"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La papa a la huancaina tiene su origen en la región de Huancaína en Perú, donde se utilizaba la papa como alimento básico. Con el tiempo, la papa a la huancaina se convirtió en un platillo tradicional y se servía en ocasiones especiales como bodas y fiestas religiosas. Durante la época colonial, se agregó la salsa de queso y aji amarillo para darle más sabor y variedad.",
    punctuation: 4.2,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 30,
      protein: 15,
      sodium: 500,
      fiber: 5
    },
    necessaryUtensils: ["olla", "cuchillo", "tabla de cortar"]
  },
  {
    id: 86,
    name: "Suspiro a la Limeña",
    country: "Perú",
    region: "",
    ingredients: ["merengue", "leche condensada", "leche evaporada", "canela"],
    recipe: "Para preparar suspiro a la limeña, se bate la leche condensada y la leche evaporada hasta que quede suave y esponjosa. Luego, se coloca en un recipiente y se cubre con merengue batido a punto de nieve. Se hornea en el horno hasta que el merengue esté bien dorado y se sirve caliente, espolvoreado con canela en polvo.",
    otherNames: ["merengue a la limeña"],
    cookingTime: {
      minTime: 45,
      maxTime: 60
    },
    history: "El suspiro a la limeña tiene su origen en la época colonial en Perú, cuando se introdujo el merengue en la gastronomía local. Con el tiempo, el suspiro a la limeña se convirtió en un postre tradicional y se servía en ocasiones especiales como bodas y fiestas religiosas. Hoy en día, el suspiro a la limeña es uno de los postres más populares y representativos de la cocina peruana.",
    punctuation: 4.6,
    nutritionalInformation: {
      calories: 400,
      fats: 20,
      carbohydrates: 40,
      protein: 20,
      sodium: 600,
      fiber: 4
    },
    necessaryUtensils: ["olla", "batidora", "recipiente", "horno"]
  },
  {
    id: 87,
    name: "Asado Criollo",
    country: "Uruguay",
    region: "Toda el país",
    ingredients: [
      "carne de vaca",
      "sal",
      "ajo",
      "pimienta negra",
      "aceite de oliva"
    ],
    recipe: "Para preparar el Asado Criollo de Uruguay, comienza por marinar la carne con sal, ajo, pimienta negra y aceite de oliva durante al menos 2 horas. Luego, calienta la parrilla o el horno a fuego medio-alto y coloca la carne en la parrilla o en una bandeja de hornear. Cocina la carne durante unos 45 minutos a una hora, o hasta que esté cocida al punto deseado. Sirve la carne cortada en rodajas y acompañada de verduras asadas y papas cocidas.",
    otherNames: [
      "Asado a la parrilla",
      "Asado al horno"
    ],
    cookingTime: {
      minTime: 2,
      maxTime: 3
    },
    history: "El Asado Criollo de Uruguay es un plato típico de la gastronomía uruguaya y es muy popular en . Se trata de una carne asada a la parrilla o al horno, marinada con ajo, sal, pimienta y aceite de oliva. Esta receta es muy similar a otras recetas de asado típicas de América del Sur, como el Asado Argentina o el Churrasco Brasileño.",
    punctuation: 4.3,
    nutritionalInformation: {
      calories: 300,
      fats: 20,
      carbohydrates: 0,
      protein: 30,
      sodium: 400,
      fiber: 0
    },
    necessaryUtensils: [
      "Parrilla",
      "Horno",
      "Bandeja de hornear",
      "Tijeras de cocina",
      "Cuchillo",
      "Espátula"
    ]
  },
  {
    id: 88,
    name: "Chivito",
    country: "Uruguay",
    region: "Toda el país",
    ingredients: [
      "pan de hamburguesa",
      "Lechuga",
      "tomate",
      "cebolla",
      "Pepinillos en rodajas",
      "carne de ternera o pollo",
      "Queso rallado",
      "huevo",
      "Bacon",
      "Mayonesa",
      "Mostaza"
    ],
    recipe: "Para preparar un Chivito de Uruguay, comienza por calentar una sartén con aceite. Mientras tanto, pica la lechuga, el tomate, la cebolla y los pepinillos en rodajas. Coloca la carne en la sartén y cocina hasta que esté bien hecha. Luego, tosta el pan de hamburguesa y coloca la carne, las verduras y el huevo frito en el pan. Agrega el queso rallado, el bacon y las salsas al gusto. Sirve caliente.",
    otherNames: [
      "Chivito canadiense"
    ],
    cookingTime: {
      minTime: 20,
      maxTime: 30
    },
    history: "El Chivito de Uruguay es una sandwich de carne de ternera o pollo, verduras, huevo frito y queso rallado, muy popular en Uruguay. Se dice que el Chivito fue creado en el año 1954 en un restaurante de Montevideo, cuando un cliente pidió un sandwich con carne de chivo y no había disponible. El dueño del restaurante improvisó y le ofreció un sandwich con carne de ternera, dando origen al Chivito. Aunque el Chivito es muy popular en Uruguay, también es conocido en otros países de América del Sur como Argentina y Brasil.",
    punctuation: 4.6,
    nutritionalInformation: {
      calories: 700,
      fats: 40,
      carbohydrates: 50,
      protein: 30,
      sodium: 1000,
      fiber: 3
    },
    necessaryUtensils: [
      "Sartén",
      "Tijeras de cocina",
      "Cuchillo",
      "Espátula"
    ]
  },
  {
    id: 89,
    name: "Milanesa",
    country: "Uruguay",
    region: "",
    ingredients: ["carne de vaca", "harina", "huevos", "pan rallado", "sal"],
    recipe: "Para hacer una milanesa de Uruguay, necesitarás los siguientes ingredientes: carne de vaca, harina, huevos, pan rallado y sal. Primero, tendrás que golpear la carne con una pala de carne para aplastarla y hacerla más fina. Después, pasarás la carne por harina,huevos batidos y pan rallado. Una vez que la carne esté cubierta con la mezcla de huevo y pan rallado, la pondrás en una sartén con aceite caliente y la freirás hasta que esté dorada. Sirve la milanesa caliente y agrega sal al gusto. ¡Ya está lista para disfrutar!",
    otherNames: ["filete empanado"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La milanesa es un plato muy popular en Uruguay, y se dice que fue traída por inmigrantes italianos al país. Aunque se asemeja a la cotoletta alla Milanese italiana, hay algunas diferencias en la preparación. La milanesa uruguaya se prepara con carne de vaca y se fríe en vez de cocerse en mantequilla o aceite como se hace en la cotoletta italiana. Además, la milanesa uruguaya se suele servir con papas fritas y ensalada.",
    punctuation: 4.2,
    nutritionalInformation: {
      calories: 250,
      fats: 13,
      carbohydrates: 20,
      protein: 15,
      sodium: 480,
      fiber: 2
    },
    necessaryUtensils: ["pala de carne", "sartén", "tenedor", "plato hondo", "cuchillo"]
  },
  {
    id: 90,
    name: "Empanada",
    country: "Uruguay",
    region: "",
    ingredients: ["masa de empanada", "carne molida", "cebolla", "ajo", "tomate", "pimiento verde", "pimiento rojo", "aceite", "sal"],
    recipe: "Para hacer una empanada de Uruguay, necesitarás los siguientes ingredientes: masa de empanada, carne molida, cebolla, ajo, tomate, pimiento verde, pimiento rojo, aceite y sal. Primero, calentarás un poco de aceite en una sartén y añadirás la carne molida. Después, añadirás la cebolla, el ajo y el pimiento verde y rojo picados y los saltearás hasta que estén cocidos. Añade el tomate picado y cocina por unos minutos más. Una vez que la carne esté cocida, sazona con sal al gusto. Mientras tanto, estira la masa de empanada y corta círculos con un cortador o un vaso. Coloca un poco de relleno en el centro de cada círculo y dobla la masa por la mitad para formar una media luna. Cierra bien los bordes con un tenedor y coloca las empanadas en una bandeja engrasada. Hornea a 180 grados Celsius durante 20-25 minutos, o hasta que estén doradas. Sirve caliente y disfruta de tu deliciosa empanada de Uruguay.",
    otherNames: ["empanada uruguaya"],
    cookingTime: {
      minTime: 1,
      maxTime: 75
    },
    history: "La empanada es un plato muy popular en Uruguay y se dice que fue traída por inmigrantes españoles al país. Se prepara con masa de empanada rellena de carne molida, verduras y especias, y se hornea en el horno. Las empanadas uruguayas suelen servirse como un aperitivo o como parte de una comida principal, y se pueden encontrar en muchos lugares de comida rápida y en celebraciones faares y festividades.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 30,
      protein: 20,
      sodium: 480,
      fiber: 2
    },
    necessaryUtensils: ["sartén", "tenedor", "bandeja para hornear"]
  },
  {
    id: 91,
    name: "Churrasco",
    country: "Uruguay",
    region: "",
    ingredients: ["bife de churrasco", "sal", "ajo", "pimienta negra"],
    recipe: "Para hacer un churrasco de Uruguay, necesitarás los siguientes ingredientes: bife de churrasco, sal, ajo y pimienta negra. Primero, sazona el bife de churrasco con sal, ajo y pimienta negra al gusto. Luego, calienta una parrilla o sartén a fuego medio-alto y coloca el bife en ella. Cocina el bife durante unos 3-4 minutos por cada lado, o hasta que esté cocido al gusto. Sirve caliente y disfruta de tu delicioso churrasco de Uruguay.Se suele acompañar con papas fritas y ensalada.",
    otherNames: ["bife de churrasco"],
    cookingTime: {
      minTime: 10,
      maxTime: 15
    },
    history: "El churrasco es un plato muy popular en Uruguay y se dice que fue traído por inmigrantes españoles al país. Se prepara con bife de churrasco, que es un corte de carne de vaca, y se cocina a la parrilla o en una sartén. El churrasco uruguayo se suele servir como una comida principal y es común encontrarlo en asados faares y festividades. Además, el churrasco es uno de los platos más emblemáticos de la gastronomía uruguaya y es muy apreciado por los habitantes del país.",
    punctuation: 4.3,
    nutritionalInformation: {
      calories: 350,
      fats: 20,
      carbohydrates: 0,
      protein: 40,
      sodium: 480,
      fiber: 0
    },
    necessaryUtensils: ["parrilla", "sartén", "tenedor", "plato hondo", "cuchillo"]
  },
  {
    id: 92,
    name: "Choripán",
    country: "Uruguay",
    region: "",
    ingredients: ["chorizo", "pan de molde", "mostaza", "mayonesa"],
    recipe: "Para hacer un choripán de Uruguay, necesitarás los siguientes ingredientes: chorizo, pan de molde, mostaza y mayonesa. Primero, calienta una parrilla o sartén a fuego medio-alto y coloca el chorizo en ella. Cocina el chorizo durante unos 3-4 minutos por cada lado, o hasta que esté cocido. Corta el pan de molde por la mitad y coloca el chorizo cocido en una de las mitades. Agrega mostaza y mayonesa al gusto y cubre con la otra mitad del pan. Sirve caliente y disfruta de tu delicioso choripán de Uruguay. Se suele acompañar con papas fritas y ensalada.",
    otherNames: ["choripán uruguayo"],
    cookingTime: {
      minTime: 10,
      maxTime: 15
    },
    history: "El choripán es un plato muy popular en Uruguay y se dice que fue traído por inmigrantes españoles al país. Se prepara con chorizo, que es un embutido picante, y pan de molde, y se suele servir como una comida rápida o un aperitivo. El choripán es muy común en asados y festividades y se puede encontrar en muchos lugares de comida rápida y puestos callejeros en Uruguay.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 250,
      fats: 15,
      carbohydrates: 20,
      protein: 10,
      sodium: 480,
      fiber: 2
    },
    necessaryUtensils: ["parrilla", "sartén", "tenedor", "plato hondo", "cuchillo"]
  },
  {
    id: 93,
    name: "arroz con pollo",
    country: "Uruguay",
    region: "",
    ingredients: ["arroz", "pollo", "cebolla", "tomate", "ajos", "especias", "aceite", "agua", "sal"],
    recipe: "Para hacer arroz con pollo de Uruguay, necesitarás los siguientes ingredientes: arroz, pollo, cebolla, tomate, ajos, especias, aceite, agua y sal. Primero, calienta un poco de aceite en una sartén y añade el pollo cortado en pedazos pequeños. saltea el pollo hasta que esté dorado por ambos lados. Después, añade la cebolla y el tomate picados y saltéalos junto con el pollo hasta que estén cocidos. Añade los ajos picados y las especias al gusto y cocina por unos minutos más. Agrega el arroz y revuelve para mezclarlo con el pollo y las verduras. Añade agua suficiente para cubrir el arroz y sazona con sal al gusto. Deja que el arroz cocine a fuego medio-bajo hasta que esté cocido y el agua se haya evaporado. Sirve caliente y disfruta de tu delicioso arroz con pollo de Uruguay.",
    otherNames: ["arroz con pollo uruguayo"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "El arroz con pollo es un plato muy popular en Uruguay y es una versión del arroz con pollo tradicional que se prepara en muchos países de América Latina. Se dice que fue traído por inmigrantes españoles al país y es un plato muy común en la gastronomía uruguaya. El arroz con pollo se suele servir como una comida principal y se puede encontrar en muchos restaurantes y hogares de Uruguay.",
    punctuation: 4.2,
    nutritionalInformation: {
      calories: 350,
      fats: 15,
      carbohydrates: 40,
      protein: 25,
      sodium: 480,
      fiber: 2
    },
    necessaryUtensils: ["sartén", "tenedor", "cuchillo", "plato hondo"]
  },
  {
    id: 94,
    name: "Locro",
    country: "Uruguay",
    region: "",
    ingredients: ["papa", "maíz", "frijol", "carne", "cebolla", "ajos", "especias", "aceite", "agua", "sal"],
    recipe: "Para hacer locro de Uruguay, necesitarás los siguientes ingredientes: papa, maíz, frijol, carne, cebolla, ajos, especias, aceite, agua y sal. Primero, cocina las papas y el maíz en agua hirviendo hasta que estén cocidos. Después, calienta un poco de aceite en una sartén y añade la carne cortada en pedazos pequeños. saltea la carne hasta que esté dorada por ambos lados. Añade la cebolla y los ajos picados y saltéalos junto con la carne hasta que estén cocidos. Agrega los frijoles cocidos y el maíz cocido y mezcla bien. Agrega las especias al gusto y cocina por unos minutos más. Agrega las papas cocidas y revuelve para mezclar todos los ingredientes. Añade agua suficiente para cubrir el locro y sazona con sal al gusto. Deja que el locro cocine a fuego medio-bajo hasta que esté cocido y el agua se haya evaporado. Sirve caliente y disfruta de tu delicioso locro de Uruguay. Se suele acompañar con queso rallado y aguacate picado.",
    otherNames: ["locro uruguayo"],
    cookingTime: {
      minTime: 1,
      maxTime: 75
    },
    history: "El locro es un plato tradicional de Uruguay y se dice que fue traído por inmigrantes indígenas al país. Se prepara con una variedad de ingredientes, como papas, maíz, frijoles, carne y verduras, y se suele servir como una comida principal. El locro es muy común en asados y festividades y se puede encontrar en muchos hogares y restaurantes de Uruguay.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 400,
      fats: 20,
      carbohydrates: 50,
      protein: 30,
      sodium: 480,
      fiber: 4
    },
    necessaryUtensils: ["sartén", "tenedor", "cuchillo", "olla", "plato hondo"]
  },
  {
    id: 95,
    name: "Torta frita",
    country: "Uruguay",
    region: "",
    ingredients: ["harina", "levadura", "agua", "azúcar", "sal", "aceite"],
    recipe: "Para hacer tortas fritas de Uruguay, necesitarás los siguientes ingredientes: harina, levadura, agua, azúcar, sal y aceite. En un tazón grande, mezcla la harina, la levadura, el azúcar y la sal. Añade suficiente agua para formar una masa suave y lisa. Deja que la masa repose durante unos 30 minutos para que leude. Mientras tanto, calienta aceite suficiente para cubrir la sartén a fuego medio-alto. Cuando el aceite esté caliente, coloca cucharadas de masa en la sartén y cocina las tortas fritas hasta que estén doradas por ambos lados. Escurre las tortas fritas sobre papel absorbente para eliminar el exceso de aceite. Sirve caliente y disfruta de tus deliciosas tortas fritas de Uruguay. Se suelen acompañar con dulce de leche o mermelada.",
    otherNames: ["torta frita uruguaya"],
    cookingTime: {
      minTime: 45,
      maxTime: 60
    },
    history: "La torta frita es una delicia muy popular en Uruguay y se dice que fue traída por inmigrantes españoles al país. Se prepara con harina, levadura, agua, azúcar y sal y se fríe en aceite caliente. Las tortas fritas se suelen servir como una comida rápida o un aperitivo y son muy comunes en ferias y fiestas en Uruguay. También se pueden encontrar en muchos puestos callejeros y lugares de comida rápida en el país.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 250,
      fats: 15,
      carbohydrates: 20,
      protein: 3,
      sodium: 480,
      fiber: 1
    },
    necessaryUtensils: ["sartén", "tenedor", "cuchillo", "tazón grande", "tijera de cocina"]
  },
  {
    id: 96,
    name: "Carbonada",
    country: "Uruguay",
    region: "No especificada",
    ingredients: [
      "carne de vaca",
      "zapallo",
      "papa",
      "cebolla",
      "ajo",
      "tomate",
      "pimiento",
      "Especies (como comino y orégano)",
      "caldo de carne",
      "aceite"
    ],
    recipe: "Para hacer una carbonada, se necesita comenzar por cortar la carne de vaca en cubos y saltearla en una sartén con un poco de aceite. Luego se agrega el zapallo, la papa y la cebolla, y se saltear por unos minutos más. A continuación, se agrega el ajo, el tomate, el pimiento y las especias, y se revuelve todo bien. Se agrega el caldo de carne y se deja cocinar a fuego medio durante unos 45 minutos o hasta que la carne esté tierna. La carbonada se puede servir caliente, acompañada de arroz o papas cocidas.",
    otherNames: [],
    cookingTime: {
      minTime: 45,
      maxTime: 60
    },
    history: "La carbonada es un platillo típico de la cocina uruguaya y argentina. Se dice que tiene sus raíces en la época de la colonización del Río de la Plata, cuando los colonizadores españoles y portugueses llevaron a América del Sur sus recetas de carnes y verduras guisadas. La carbonada se ha convertido en un plato muy popular en Uruguay y se suele servir en ocasiones especiales o durante el invierno, ya que es una comida caliente y reconfortante.",
    punctuation: 4.3,
    nutritionalInformation: {
      calories: 250,
      fats: 10,
      carbohydrates: 20,
      protein: 20,
      sodium: 50,
      fiber: 2
    },
    necessaryUtensils: [
      "Sartén",
      "Cuchillo",
      "Tenedor",
      "Cuchara de madera"
    ]
  },
  {
    id: 97,
    name: "Pabellón criollo",
    country: "Venezuela",
    region: "",
    ingredients: [
      "arroz cocido",
      "pollo desmechado",
      "plátano maduro frito",
      "arepa",
      "papa cocida",
      "agua",
      "aceite",
      "caldo de pollo",
      "ajo",
      "cebolla",
      "tomate",
      "perejil",
      "comino",
      "orégano",
      "sal"
    ],
    recipe: "1. En una olla, calienta un poco de aceite y fríe los ajos y cebollas hasta que estén transparentes. 2. Agrega el tomate y cocina por unos minutos más. 3. Agrega el pollo desmechado y cocina hasta que esté cocido. 4. Agrega el caldo de pollo y deja que hierva. 5. Agrega el arroz cocido, las papas cocidas y los plátanos maduros fritos. 6. Agrega el comino, el orégano y el perejil picado. 7. Agrega sal al gusto. 8. Sirve caliente, acompañado de arepas calientes.",
    otherNames: ["Venezuelan national dish"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "El pabellón criollo es un plato típico de la cocina venezolana, considerado como el plato nacional del país. Se dice que tiene sus raíces en la época colonial, cuando los esclavos africanos traían sus propias recetas y ingredientes a la mesa. Con el tiempo, se fueron fusionando con los ingredientes y platos tradicionales de la región, dando lugar al pabellón criollo que conocemos hoy en día. Es un plato muy completo y nutritivo, que se sirve típicamente para el almuerzo o la cena.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 1000,
      fats: 20,
      carbohydrates: 150,
      protein: 30,
      sodium: 500,
      fiber: 10
    },
    necessaryUtensils: [
      "olla",
      "cuchillo",
      "tabla de cortar",
      "tenedor",
      "cuchara de madera"
    ]
  },
  {
    id: 98,
    name: "Arepa",
    country: "Venezuela",
    region: "",
    ingredients: [
      "harina precocida de maíz",
      "agua",
      "sal"
    ],
    recipe: "1. En un tazón, mezcla la harina de maíz precocida con agua fría y sal. 2. Amasa la mezcla hasta obtener una masa suave y homogénea. 3. Forma bolitas con la masa y aplástalas ligeramente para darles forma de disco. 4. Calienta una sartén o plancha a fuego medio y coloca las arepas en la superficie caliente. 5. Cocina las arepas hasta que estén doradas y crujientes por ambos lados. 6. Sirve caliente, ya sea rellena o sola.",
    otherNames: ["Arepa venezolana", "Cachapa"],
    cookingTime: {
      minTime: 0.25,
      maxTime: 30
    },
    history: "La arepa es un plato típico de la cocina venezolana y colombiana, que se ha vuelto muy popular en toda América Latina y en algunas partes del mundo. Se dice que tiene sus raíces en la época precolombina, cuando los indígenas ya preparaban una masa de maíz cocido y aplastado para hacer tortillas. Con el tiempo, la arepa se fue adaptando y evolucionando, y hoy en día es una de las comidas más queridas y apreciadas en Venezuela. Se puede comer sola o rellena con diferentes ingredientes, y se sirve típicamente para el desayuno o la cena.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 200,
      fats: 2,
      carbohydrates: 40,
      protein: 5,
      sodium: 200,
      fiber: 3
    },
    necessaryUtensils: [
      "tazón",
      "sartén o plancha",
      "cuchillo",
      "tabla de cortar",
      "espátula"
    ]
  },
  {
    id: 99,
    name: "Asado negro",
    country: "Venezuela",
    region: "",
    ingredients: [
      "carne de vaca",
      "ajo",
      "cebolla",
      "comino",
      "orégano",
      "pimienta negra",
      "vinagre",
      "azúcar",
      "sal"
    ],
    recipe: "1. En un tazón, mezcla el ajo picado, la cebolla picada, el comino, el orégano, la pimienta negra y el vinagre. 2. Agrega la carne de vaca cortada en trozos y mezcla bien para que quede bien cubierta con la marinada. 3. Deja reposar la carne en la marinada por lo menos una hora, o preferiblemente durante toda la noche. 4. Calienta una sartén o parrilla a fuego medio-alto y coloca la carne en la superficie caliente. 5. Cocina la carne hasta que esté dorada por ambos lados y bien cocida por dentro. 6. Sirve caliente, acompañado de arroz y verduras.",
    otherNames: ["carne asada venezolana"],
    cookingTime: {
      minTime: 120,
      maxTime: 240
    },
    history: "El asado negro es un plato típico de la cocina venezolana que se caracteriza por la carne de vaca marinada en una mezcla de ajo, cebolla, comino, orégano, pimienta negra y vinagre, y luego asada hasta que esté dorada y cocida por dentro. Se dice que el asado negro tiene sus raíces en la época colonial, cuando los esclavos africanos preparaban la carne de esta manera para darle un sabor más intenso y sabroso. Hoy en día, el asado negro se ha vuelto muy popular en Venezuela y se sirve típicamente en ocasiones especiales como bodas o fiestas faares.",
    punctuation: 4.3,
    nutritionalInformation: {
      calories: 500,
      fats: 20,
      carbohydrates: 0,
      protein: 50,
      sodium: 200,
      fiber: 0
    },
    necessaryUtensils: [
      "tazón",
      "sartén o parrilla",
      "cuchillo",
      "tabla de cortar",
      "espátula"
    ]
  },
  {
    id: 100,
    name: "Chapapa",
    country: "Venezuela",
    region: "",
    ingredients: [
      "harina precocida de maíz",
      "agua"
    ],
    recipe: "1. En un tazón, mezcla la harina de maíz precocida con agua fría hasta obtener una masa suave y homogénea. 2. Forma bolitas con la masa y aplástalas ligeramente para darles forma de disco. 3. Calienta una sartén o plancha a fuego medio y coloca las chapapas en la superficie caliente. 4. Cocina las chapapas hasta que estén doradas y crujientes por ambos lados. 5. Sirve caliente, ya sea sola o acompañada de queso o aguacate.",
    otherNames: ["Arepa venezolana"],
    cookingTime: {
      minTime: 0.25,
      maxTime: 30
    },
    history: "La chapapa es un plato típico de la cocina venezolana que se prepara con harina de maíz precocida y agua. Se dice que tiene sus raíces en la época precolombina, cuando los indígenas ya preparaban una masa de maíz cocido y aplastado para hacer tortillas. Con el tiempo, la chapapa se fue adaptando y evolucionando, y hoy en día es una de las comidas más queridas y apreciadas en Venezuela. Se puede comer sola o acompañada de queso o aguacate, y se sirve típicamente para el desayuno o la cena.",
    punctuation: 4.3,
    nutritionalInformation: {
      calories: 200,
      fats: 2,
      carbohydrates: 40,
      protein: 5,
      sodium: 200,
      fiber: 3
    },
    necessaryUtensils: [
      "tazón",
      "sartén o plancha",
      "cuchillo",
      "tabla de cortar",
      "espátula"
    ]
  },
  {
    id: 101,
    name: "Hallaca",
    country: "Venezuela",
    region: "",
    ingredients: [
      "maíz precocido",
      "carne molida",
      "aji dulce",
      "ají picante",
      "cebolla",
      "ajo",
      "pimienta negra",
      "orégano",
      "culantro",
      "perejil",
      "tomate",
      "aceituna",
      "pimiento verde",
      "pimiento rojo",
      "agua",
      "sal",
      "hojas de plátano"
    ],
    recipe: "Para preparar la hallaca, se necesitan hojas de plátano verde para envolver la mezcla. Primero, se cocina el maíz y se muele para obtener la masa. Luego, se mezcla con la carne molida, las verduras picadas y las especias. Se forman pequeñas porciones de la mezcla, que se colocan en el centro de las hojas de plátano y se enrollan para formar la hallaca. Se pueden cocinar a la parrilla o en una olla con agua hirviendo durante unos 45 minutos. Es importante asegurarse de que las hallacas estén completamente sumergidas en el agua para que se cocinen de manera uniforme. Una vez cocidas, se retiran las hojas de plátano y se sirven calientes.",
    otherNames: ["tamal venezolano"],
    cookingTime: {
      minTime: 45,
      maxTime: 0.75
    },
    history: "La hallaca es un plato típico de Venezuela que se originó a partir de la mezcla de tradiciones culinarias indígenas, africanas y españolas. Se cree que fue introducida por los esclavos africanos que trabajaban en las haciendas de Venezuela durante la colonización española. La hallaca se prepara tradicionalmente en época navideña y es un plato muy popular en las celebraciones faares y festivas.",
    punctuation: 4.3,
    nutritionalInformation: {
      calories: 350,
      fats: 10,
      carbohydrates: 50,
      protein: 15,
      sodium: 500,
      fiber: 3
    },
    necessaryUtensils: [
      "olla",
      "mortero",
      "cuchillo",
      "tabla de cortar",
      "tenedor"
    ]
  },
  {
    id: 102,
    name: "Patacón",
    country: "Venezuela",
    region: "",
    ingredients: [
      "plátano verde",
      "aceite de oliva",
      "sal"
    ],
    recipe: "Para preparar el patacón, se necesitan plátanos verdes maduros pero no demasiado. Se cortan en rodajas gruesas y se fríen en aceite caliente hasta que estén dorados. Luego, se presionan con un tenedor o con una prensa especial para patacones para aplastarlos y hacerlos más finos. Se fríen nuevamente hasta que estén crujientes y se sazonan con sal al gusto. El patacón se suele servir caliente y se puede acompañar con diversos ingredientes, como carne, pollo, pescado o verduras.",
    otherNames: ["tostón"],
    cookingTime: {
      minTime: 20,
      maxTime: 30
    },
    history: "El patacón es un plato típico de Venezuela y de otros países de América Latina, como Colombia, Ecuador y panamá. Se cree que tiene origen indígena y que se preparaba con plátano verde maduro y se servía como aperitivo o como parte de un plato principal. Actualmente, el patacón es uno de los platos más populares de la gastronomía venezolana y se puede encontrar en casi todos los restaurantes y puestos callejeros del país.",
    punctuation: 4.3,
    nutritionalInformation: {
      calories: 250,
      fats: 15,
      carbohydrates: 35,
      protein: 2,
      sodium: 50,
      fiber: 3
    },
    necessaryUtensils: [
      "sartén",
      "tenedor",
      "prensa para patacones"
    ]
  },
  {
    id: 103,
    name: "Pupusa",
    country: "Venezuela",
    region: "",
    ingredients: [
      "masa de maíz",
      "queso",
      "frijol",
      "carne",
      "verdura"
    ],
    recipe: "Para preparar la pupusa, se necesita masa de maíz precocida y se le da forma redonda. Luego, se coloca el relleno en el centro y se sella la pupusa para que el relleno no se salga durante la cocción. Las pupusas se pueden cocinar a la parrilla o en una sartén con aceite caliente hasta que estén doradas y crujientes por fuera y suaves por dentro. Se sirven calientes y se pueden acompañar con diversos ingredientes, como salsa de tomate, salsa de ajo o salsa de aguacate.",
    otherNames: ["empanada venezolana"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La pupusa es un plato típico de Venezuela y de otros países de América Central, como El salvador, Guatemala y Honduras. Se cree que tiene origen maya y que se preparaba con masa de maíz y rellena con diferentes ingredientes. Actualmente, la pupusa es uno de los platos más populares de la gastronomía venezolana y se puede encontrar en casi todos los restaurantes y puestos callejeros del país.",
    punctuation: 4.6,
    nutritionalInformation: {
      calories: 200,
      fats: 10,
      carbohydrates: 25,
      protein: 8,
      sodium: 250,
      fiber: 3
    },
    necessaryUtensils: [
      "sartén",
      "espátula",
      "tenedor"
    ]
  },
  {
    id: 104,
    name: "Carne Mechada",
    country: "Venezuela",
    region: "",
    ingredients: [
      "carne de res",
      "cebolla",
      "ajo",
      "pimienta negra",
      "orégano",
      "culantro",
      "perejil",
      "tomate",
      "caldo de carne",
      "aceite de oliva",
      "sal"
    ],
    recipe: "Para preparar la carne mechada, se necesita carne de res magra y se corta en tiras delgadas. Luego, se fríe en aceite caliente hasta que esté dorada y crujiente. Se agrega cebolla, ajo, pimienta negra, orégano, culantro y perejil picados y se saltear durante unos minutos. Se añade tomate picado y se cocina durante unos minutos más. Se agrega caldo de carne y se cocina a fuego medio durante una hora o hasta que la carne esté suave y tierna. Se sazona con sal al gusto y se sirve caliente.",
    otherNames: ["picadillo venezolano"],
    cookingTime: {
      minTime: 1,
      maxTime: 1.5
    },
    history: "La carne mechada es un plato típico de la gastronomía venezolana y se prepara con carne de res picada y cocida con diversas verduras y especias. Se suele servir como acompañamiento de arroz, papas fritas o arepas y es muy popular en las celebraciones faares y festivas.",
    punctuation: 4.7,
    nutritionalInformation: {
      calories: 300,
      fats: 15,
      carbohydrates: 10,
      protein: 35,
      sodium: 500,
      fiber: 2
    },
    necessaryUtensils: [
      "sartén",
      "espátula",
      "tenedor"
    ]
  },
  {
    id: 105,
    name: "Empanada de Pabellón",
    country: "Venezuela",
    region: "",
    ingredients: [
      "masa de harina",
      "carne de res desmechada",
      "cebolla",
      "ajo",
      "pimienta negra",
      "orégano",
      "culantro",
      "perejil",
      "tomate",
      "plátano verde",
      "queso rallado",
      "aceite de oliva",
      "sal"
    ],
    recipe: "Para preparar la empanada de pabellón, se necesita masa de harina y se estira hasta formar un círculo del tamaño deseado. Luego, se coloca en el centro una porción de carne de res desmechada cocida con cebolla, ajo, pimienta negra, orégano, culantro, perejil y tomate picados. Se añade una rodaja de plátano verde y se espolvorea queso rallado por encima. Se dobla la masa para formar una media luna y se sella los bordes para cerrar la empanada. Se fríe en aceite caliente hasta que esté dorada y crujiente y se sazona con sal al gusto. Se sirve caliente y se puede acompañar con diversos ingredientes, como salsa de tomate o salsa de ajo.",
    otherNames: ["empanada venezolana"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La empanada de pabellón es un plato típico de la gastronomía venezolana y se prepara con masa de harina y un relleno de carne de res, verduras y plátano verde. Se suele servir como aperitivo o como parte de un plato principal y es muy popular en las celebraciones faares y festivas.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 250,
      fats: 15,
      carbohydrates: 25,
      protein: 15,
      sodium: 250,
      fiber: 2
    },
    necessaryUtensils: [
      "sartén",
      "espátula",
      "tenedor"
    ]
  },
  {
    id: 106,
    name: "Cazuela de Venezuela",
    country: "Venezuela",
    region: "",
    ingredients: [
      "carne de res picada",
      "cebolla",
      "ajo",
      "tomate",
      "arvejas",
      "maíz dulce",
      "agua",
      "ají molido",
      "comino molido",
      "cumin molido",
      "pimienta al gusto"
    ],
    recipe: "1. En una sartén grande, saltear la carne de res hasta que esté cocida. Añadir la cebolla, el ajo y el tomate y saltear durante unos minutos más. 2. Agregar las arvejas, el maíz, el ají, el comino, el cumin y la taza de agua. Mezclar bien y cocinar a fuego medio durante unos 15 minutos. 3. Agregar la sal y la pimienta al gusto y servir caliente.",
    otherNames: [],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La cazuela es un plato típico de la cocina venezolana, que se prepara con carne de res y verduras. Se cree que tiene sus raíces en la cocina criolla, que combina ingredientes y técnicas culinarias de la cocina española con elementos de la cocina indígena y africana. La cazuela es una opción popular en Venezuela para el almuerzo o la cena y se suele servir con arroz y aguacate.",
    punctuation: 4.5,
    nutritionalInformation: {
      calories: 312,
      fats: 9.3,
      carbohydrates: 37.4,
      protein: 20.2,
      sodium: 78,
      fiber: 4.5
    },
    necessaryUtensils: [
      "Sartén grande",
      "Cuchillo",
      "Taza medidora",
      "Cucharada medidora"
    ]
  },
  {
    id: 107,
    name: "Empanada de pabellón",
    country: "Venezuela",
    region: "",
    ingredients: [
      "harina de trigo",
      "agua tibia",
      "sal",
      "aceite vegetal",
      "caldo de carne",
      "carne picada",
      "arroz cocido",
      "frijoles cocidos",
      "cebolla picada",
      "ajo picado",
      "tomate picado",
      "comino",
      "orégano",
      "ají dulce molido",
      "sal y pimienta al gusto",
      "huevo batido"
    ],
    recipe: "Para preparar las empanadas de pabellón venezolanas, comienza mezclando la harina de trigo, el agua tibia y la sal en un tazón hasta que se forme una masa suave. Divide la masa en 8 porciones iguales y estíralas con un rodillo hasta formar círculos del tamaño de un plato pequeño. Calienta el aceite en una sartén a fuego medio y fríe las empanadas por 1-2 minutos de cada lado hasta que estén doradas y crujientes. Escurre las empanadas sobre papel absorbente y reserve.En otra sartén, calienta el caldo de carne y agrega la carne picada. Sazona con comino, orégano, ají dulce y sal y pimienta al gusto. Agrega la cebolla, el ajo y el tomate picados y cocina a fuego medio hasta que la carne esté cocida. Agrega el arroz cocido y los frijoles cocidos y revuelve para mezclar.Coloca un poco de la mezcla de carne en el centro de cada empanada y dobla por la mitad para formar una media luna. Pincela los bordes de las empanadas con huevo batido y cierra sellando bien las empanadas. Vuelve a calentar el aceite en la sartén y fríe las empanadas por unos minutos más hasta que estén doradas y crujientes. Sirve caliente.Otros nombres conocidos: Empanadas de pabellón venezolanas, empanadas venezolanas, empanadas de carne",
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La empanada de pabellón es un platillo tradicional de Venezuela que se originó en la región de Zulia, ubicada en el occidente del país. Se dice que este platillo fue creado durante la época de la colonización española y que se inspiró en la empanada gallega, una empanada típica de Galicia, España.La empanada de pabellón se prepara con masa de harina de trigo que se fríe y se rellena con una mezcla de carne picada, arroz, frijoles, cebolla, ajo, tomate y especias. A menudo se sirve acompañada de una ensalada de tomate y cebolla y se puede comer tanto fría como caliente.En la actualidad, la empanada de pabellón es uno de los platillos más populares y tradicionales de Venezuela y se puede encontrar en casi todos los rincones del país. Es común ver a las personas comiendo empanadas de pabellón como una comida rápida y económica en la calle o en los mercados populares.",
    punctuation: 4.2,
    otherNames: [
      "Empanadas de pabellón venezolanas",
      "Empanadas venezolanas",
      "Empanadas de carne"
    ],
    nutritionalInformation: {
      calories: 250,
      fats: 15,
      carbohydrates: 20,
      protein: 10,
      sodium: 500,
      fiber: 3
    },
    necessaryUtensils: [
      "Tazón",
      "Rodillo",
      "Sartén",
      "Papel absorbente",
      "Cuchillo",
      "Tijeras"
    ]
  },
  {
    id: 108,
    name: "Cazuela venezolana",
    country: "Venezuela",
    region: "",
    ingredients: [
      "arroz",
      "frijoles",
      "aguacate",
      "plátano verde",
      "carne de vaca",
      "cebolla",
      "ajo",
      "tomate",
      "pimiento verde",
      "cilantro",
      "aceite de oliva",
      "sal y pimienta al gusto"
    ],
    recipe: "Para preparar la cazuela venezolana, comienza por cocinar el arroz y los frijoles según las instrucciones del paquete. Mientras tanto, corta la carne en cubos y saltéala en una sartén con un poco de aceite de oliva hasta que esté dorada por ambos lados. Añade la cebolla, el ajo, el tomate y el pimiento verde picados y saltéalos junto con la carne hasta que estén suaves. Agrega el arroz y los frijoles cocidos y mezcla bien. Sirve la cazuela en platos individuales y decora con rodajas de aguacate y plátano verde frito. Agrega un poco de cilantro fresco picado y sirve caliente.",
    otherNames: ["arroz con pico"],
    cookingTime: {
      minTime: 0.5,
      maxTime: 0.75
    },
    history: "La cazuela venezolana es un plato tradicional que se ha preparado en Venezuela durante muchos años. Se cree que tiene sus raíces en la comida campesina, ya que utiliza ingredientes fáciles de conseguir y es muy nutritiva. Hoy en día, la cazuela es un plato popular en  y se puede encontrar en muchos restaurantes y hogares venezolanos.",
    punctuation: 4.7,
    nutritionalInformation: {
      calories: 500,
      fats: 20,
      carbohydrates: 60,
      protein: 20,
      sodium: 500,
      fiber: 10
    },
    necessaryUtensils: [
      "Sartén",
      "Olla",
      "Cuchillo",
      "Taza de medir",
      "Cuchara de madera"
    ]
  }
]