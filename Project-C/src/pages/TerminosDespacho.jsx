import React from 'react';

const TerminosDespacho = () => {
  return (
    <div className="bg-gray-100 py-40">
      <div className="container mx-auto px-4 bg-white rounded-lg shadow-lg p-8 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Términos y Condiciones de Uso</h1>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">1. Generalidades</h2>
          <p className="text-sm">
            La experiencia de compra en Gran Marina es cómoda, fácil y segura. En este sentido, Gran Marina trabaja con los más altos estándares de seguridad y toda la información que los usuarios registran en el Sitio se mantiene de forma confidencial.

            Estas Condiciones de Uso regulan el acceso y utilización de la página web. El acceso a la misma implica la aceptación de las presentes Condiciones de Uso. Gran Marina puede ofrecer a través de la página web servicios que podrán encontrarse sometidos a unas condiciones particulares propias sobre las cuales se informará al Usuario en cada caso concreto.

            El Cliente al comprar en Gran Marina acepta estos Términos y Condiciones, nuestras Políticas de Cambios y Devoluciones, Despacho, Retiro en Tienda y Quiebres de Stock.

            La compra es confirmada una vez se aprueba el pago y será informado vía correo electrónico.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">2. Acceso a la página web y contraseñas</h2>
          <p className="text-sm">
            En general no se exige la previa suscripción o registro como Usuario para el acceso y uso de la página web, sin perjuicio de que para la utilización de determinados servicios o contenidos de la misma se deba realizar dicha suscripción o registro.

            Los datos de los Usuarios obtenidos a través de la suscripción o registro a la presente página web, están protegidos mediante contraseñas elegidas por ellos mismos. El Usuario se compromete a mantener su contraseña en secreto y a protegerla de usos no autorizados por terceros. El Usuario deberá notificar a Gran Marina inmediatamente cualquier uso no consentido de su cuenta o cualquier violación de la seguridad relacionada con el servicio de la página web, de la que haya tenido conocimiento.

            Gran Marina no se hace responsable frente a los Usuarios, por la revelación de sus datos personales a terceros que no sea debida a causas directamente imputables a Gran Marina, ni por el uso que de tales datos hagan terceros ajenos a la empresa.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">3. Uso correcto de la página web</h2>
          <p className="text-sm">
            El Usuario se compromete a utilizar la página web, los contenidos y servicios de conformidad con la Ley, las presentes Condiciones de Uso, las buenas costumbres y el orden público. Del mismo modo el Usuario se obliga a no utilizar la página web, sus contenidos o los servicios que se presten a través de ésta con fines o efectos ilícitos o contrarios al contenido de las presentes Condiciones de Uso, lesivos de los intereses o derechos de terceros, o que de cualquier forma pueda dañar, inutilizar, hacer inaccesibles o deteriorar la página web, sus contenidos o sus servicios o impedir un normal disfrute de la misma por otros Usuarios.

            Asimismo, el Usuario se compromete expresamente a no destruir, alterar, inutilizar o, de cualquier otra forma, dañar los datos, programas o documentos electrónicos que se encuentren en la Web.

            El Usuario se compromete a no obstaculizar el acceso de otros Usuarios mediante el consumo masivo de los recursos informáticos a través de los cuales Gran Marina presta el servicio, así como realizar acciones que dañen, interrumpan o generen errores en dichos sistemas o servicios.

            El Usuario se compromete a no introducir programas, virus, macros, applets, controles ActiveX o cualquier otro dispositivo lógico o secuencia de caracteres que causen o sean susceptibles de causar cualquier tipo de alteración en los sistemas informáticos de Gran Marina o de terceros.

            Las compras en nuestro Sitio web deben ser realizadas por mayores de 18 años.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">4. Medidas de Seguridad</h2>
          <p className="text-sm">
            Para cumplir los objetivos de seguridad Gran Marina cuenta con la tecnología SSL (Secure Sockets Layer) que asegura, tanto la autenticidad del Sitio, como el cifrado de toda la información que nos entrega el usuario. Cada vez que el usuario se registra en el Sitio y entrega información de carácter personal, sin importar el lugar geográfico en donde se encuentre, a efectos de comprar un producto, el navegador por el cual ejecuta el acto se conecta al Sitio a través del protocolo SSL, que acredita que el usuario se encuentra efectivamente en el Sitio y en nuestros servidores (lo cual se aprecia con la aparición del código HTTPS en la barra de direcciones del navegador). De esta forma se establece un método de cifrado de la información entregada por el usuario y una clave de sesión única. Esta tecnología permite que la información de carácter personal del usuario, como su nombre, dirección y datos de tarjetas bancarias, sean codificadas previamente, para que no pueda ser leída cuando se transmite a través de Internet. Todos los certificados SSL se crean para un servidor particular, en un dominio específico.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TerminosDespacho;
