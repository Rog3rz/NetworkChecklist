const suggestions = document.querySelectorAll(".suggestion");
const cosas = document.querySelectorAll(".form-check-input");

function checkAll() {
  suggestions.forEach((x) => (x.innerHTML = ""));

  for (let i = 0; i < cosas.length; i++) {
    if (!cosas[i].checked) {
      switch (i) {
        case 0:
          suggestions[
            i
          ].innerHTML = `Sugerencia 1: 1.-Evaluar la infraestructura de cableado actual: Es importante evaluar la infraestructura de cableado existente para identificar cualquier problema o deficiencia.
          <br>
          2.-Desarrollar un plan de mejora: Una vez identificadas las áreas problemáticas, se debe desarrollar un plan para mejorar la infraestructura de cableado. Esto puede incluir la actualización de los cables, la reparación de los conectores y enchufes dañados, la instalación de nuevos puntos de acceso, entre otras medidas.
          <br>
          3.-Implementar medidas de seguridad adicionales: Si la mala infraestructura de cableado representa un riesgo para la seguridad de la información, se deben implementar medidas de seguridad adicionales para reducir el riesgo. Esto puede incluir el cifrado de datos, la implementación de políticas de acceso y seguridad, entre otras medidas.
          <br>
          4.-Realizar pruebas y auditorías regulares: Es importante realizar pruebas y auditorías regulares de la infraestructura de cableado para asegurarse de que sigue siendo segura y está en buen estado de funcionamiento.`;
          break;

        case 1:
          suggestions[
            i
          ].innerHTML = `Sugerencia 2: 1.-Evaluar la situación actual: Es importante evaluar la situación actual para determinar la magnitud del problema. Esto puede incluir la realización de mediciones de temperatura y humedad en el sitio y la identificación de cualquier equipo que esté sobrecalentándose o no esté funcionando correctamente debido a la falta de ventilación adecuada.
          <br>
          2.-Identificar y resolver los problemas de ventilación: Una vez que se haya evaluado la situación actual, se pueden identificar y resolver los problemas de ventilación. Esto puede incluir la instalación de ventiladores adicionales, la mejora del sistema de aire acondicionado, la revisión del diseño de la ventilación, entre otras medidas.
          <br>
          3.-Implementar medidas de seguridad adicionales: Si la falta de ventilación representa un riesgo para la seguridad de la información, se deben implementar medidas de seguridad adicionales para reducir el riesgo. Esto puede incluir la implementación de sistemas de detección y prevención de incendios, la implementación de sistemas de respaldo y recuperación de datos, entre otras medidas.
          <br>
          4.-Realizar pruebas y auditorías regulares: Es importante realizar pruebas y auditorías regulares de la ventilación del sitio para asegurarse de que sigue siendo adecuada y no representa un riesgo para la seguridad de la información.`;
          break;

        case 2:
          suggestions[
            i
          ].innerHTML = `Sugerencia 3: 1.-Identificar los problemas: Es importante identificar los cables que no están etiquetados correctamente. Esto puede incluir la revisión del inventario de cableado y la realización de pruebas para identificar los cables que están causando problemas.
          <br>
          2.-Establecer políticas de etiquetado: Es importante establecer políticas de etiquetado claras para el cableado. Esto puede incluir definir los estándares de etiquetado y el tipo de información que debe incluirse en las etiquetas.
          <br>
          3.-Capacitación del personal: Es importante capacitar al personal en las políticas de etiquetado establecidas y proporcionarles las herramientas necesarias para etiquetar el cableado correctamente.
          <br>
          4.-Implementar medidas de seguimiento: Es importante implementar medidas de seguimiento para garantizar que el etiquetado se realice de manera adecuada y regular. Esto puede incluir la realización de auditorías regulares del etiquetado del cableado.
          <br>
          5.-Realizar pruebas y auditorías regulares: Es importante realizar pruebas y auditorías regulares del cableado para asegurarse de que el etiquetado sigue siendo adecuado y no representa un riesgo para la seguridad de la información.`;
          break;

        case 3:
          suggestions[
            i
          ].innerHTML = `Sugerencia 4: 1.-Realizar pruebas de velocidad de la red: Se pueden realizar pruebas de velocidad de la red para medir el ancho de banda disponible. Hay varias herramientas en línea gratuitas que pueden realizar estas pruebas de velocidad.
          <br>
          2.-Monitorear el uso de la red: Es importante monitorear el uso de la red para identificar los cuellos de botella y los picos de tráfico. Esto puede ayudar a determinar si el ancho de banda actual es suficiente o si se necesitan mejoras.
          <br>
          3.-Establecer políticas de gestión de ancho de banda: Es importante establecer políticas claras para la gestión del ancho de banda. Esto puede incluir la definición de los niveles de servicio, el monitoreo y la gestión del uso de la red, y la implementación de medidas para garantizar que se cumplan los objetivos de ancho de banda.
          <br>
          4.-Mejorar la infraestructura de la red: Si el ancho de banda actual no es suficiente, se pueden tomar medidas para mejorar la infraestructura de la red. Esto puede incluir la actualización de los enrutadores y switches, la implementación de tecnología de alta velocidad y la ampliación de la capacidad de la red.`;
          break;

        case 4:
          suggestions[
            i
          ].innerHTML = `Sugerencia 5: 1.-Identificar la causa raíz: Es importante identificar la causa raíz de las caídas frecuentes de Internet. Esto puede incluir la revisión de la infraestructura de la red, el monitoreo del uso de la red, y la evaluación de los proveedores de servicios de Internet.
          <br>
          2.-Implementar redundancia: Es importante implementar medidas de redundancia para garantizar la disponibilidad de la red. Esto puede incluir la implementación de conexiones de Internet de backup, la configuración de enrutadores y switches para la conmutación por error, y la implementación de sistemas de alimentación de emergencia.
          <br>
          3.-Establecer políticas de gestión de la red: Es importante establecer políticas claras para la gestión de la red. Esto puede incluir la definición de los niveles de servicio, el monitoreo y la gestión del uso de la red, y la implementación de medidas para garantizar que se cumplan los objetivos de disponibilidad de la red.
          <br>
          4.-Capacitar al personal: Es importante capacitar al personal para que puedan identificar y solucionar problemas de la red. Esto puede incluir la capacitación en la configuración y administración de la infraestructura de la red, la resolución de problemas de la red, y la implementación de medidas de seguridad.`;
          break;

        case 5:
          suggestions[
            i
          ].innerHTML = `Sugerencia 6: 1.-Realizar un inventario de los componentes: Es importante realizar un inventario detallado de los componentes del site. Esto puede incluir los equipos de red, los servidores, los sistemas de almacenamiento, y cualquier otro dispositivo o componente crítico del site.
          <br>
          2.-Realizar un análisis de riesgos: Es importante realizar un análisis de riesgos para identificar los posibles riesgos asociados con la falta de información técnica del site. Esto puede incluir la evaluación de los riesgos de seguridad, los riesgos de disponibilidad, y los riesgos de cumplimiento normativo.
          <br>
          3.-Establecer políticas de gestión de la información: Es importante establecer políticas claras para la gestión de la información relacionada con el site. Esto puede incluir la definición de los procedimientos para la recopilación y actualización de la información técnica, la definición de los roles y responsabilidades para la gestión de la información, y la implementación de medidas para garantizar que la información esté actualizada y precisa.
          <br>
          4.-Capacitar al personal: Es importante capacitar al personal para que puedan identificar y recopilar información técnica sobre el site. Esto puede incluir la capacitación en la documentación y etiquetado de los componentes, la evaluación de la capacidad de los componentes y la resolución de problemas.`;
          break;

        case 6:
          suggestions[
            i
          ].innerHTML = `Sugerencia 7: 1.-Identificar los roles y responsabilidades: Es importante identificar los roles y responsabilidades de cada persona que tiene acceso al site. Esto puede incluir la definición de los niveles de acceso, la definición de los roles y responsabilidades, y la implementación de medidas para garantizar que cada persona solo tenga acceso a la información que necesita para realizar sus tareas.
          <br>
          2.-Implementar medidas de autenticación: Es importante implementar medidas de autenticación para garantizar que solo las personas autorizadas tengan acceso al site. Esto puede incluir el uso de contraseñas seguras, el uso de autenticación de dos factores, y la implementación de medidas para proteger contra el phishing y otras formas de ataques de ingeniería social.
          <br>
          3.-Implementar medidas de control de acceso: Es importante implementar medidas de control de acceso para limitar el acceso a la información confidencial. Esto puede incluir la implementación de políticas de acceso basadas en roles, la implementación de medidas para garantizar que los permisos de acceso sean otorgados y revocados de manera oportuna, y la implementación de medidas para proteger contra la suplantación de identidad.
          <br>
          4.-Capacitar al personal: Es importante capacitar al personal para que puedan identificar y prevenir las amenazas a la seguridad de la información. Esto puede incluir la capacitación en la seguridad de la información, la sensibilización sobre las amenazas de seguridad, y la capacitación en las mejores prácticas para proteger la información confidencial.`;
          break;

        case 7:
          suggestions[
            i
          ].innerHTML = `Sugerencia 8: 1.-Realizar una evaluación de riesgos: Es importante realizar una evaluación de riesgos para identificar las vulnerabilidades y amenazas a la seguridad de la información en la red. Esto puede ayudar a determinar las áreas en las que se debe invertir para mejorar la seguridad y el rendimiento de la red.
          <br>
          2.-Priorizar las áreas de inversión: Es importante priorizar las áreas en las que se debe invertir para mejorar la calidad de la red. Esto puede incluir la actualización de hardware y software, la implementación de medidas de seguridad adicionales y la mejora de la gestión de la red.
          <br>
          3.-Planificar el presupuesto: Es importante planificar un presupuesto adecuado para la mejora de la calidad de la red. Esto puede incluir la asignación de recursos para la actualización de hardware y software, la implementación de medidas de seguridad adicionales y la capacitación del personal.
          <br>
          4.-Monitorear y medir el desempeño: Es importante monitorear y medir el desempeño de la red después de las mejoras para asegurarse de que se han logrado los resultados deseados y para identificar cualquier otra área que necesite mejoras adicionales.`;
          break;

        case 8:
          suggestions[
            i
          ].innerHTML = `Sugerencia 9: 1.-Capacitación del personal: Es importante proporcionar capacitación y concientización sobre la seguridad de la información a todo el personal de la organización. Esto incluye la capacitación en medidas de seguridad básicas, como contraseñas seguras y la detección de correos electrónicos de phishing.
          <br>
          2.-Implementación de políticas de seguridad: Es importante implementar políticas de seguridad claras y concisas en toda la organización. Esto puede incluir políticas sobre el uso de dispositivos móviles, el acceso a información confidencial y la gestión de contraseñas.
          <br>
          3.-Monitoreo y auditoría de la red: Es importante monitorear y auditar regularmente la red para detectar posibles amenazas y vulnerabilidades. Esto puede incluir la implementación de herramientas de monitoreo de red y la realización de auditorías de seguridad.
          <br>
          4.-Implementación de medidas de seguridad adicionales: Es importante implementar medidas de seguridad adicionales para proteger la red y la información confidencial. Esto puede incluir la implementación de firewalls, la encriptación de datos y la autenticación de dos factores.`;
          break;

        case 9:
          suggestions[
            i
          ].innerHTML = `Sugerencia 10: 1.-Implementar políticas claras de uso de la red: Es importante implementar políticas claras de uso de la red que limiten el acceso a sitios web y aplicaciones no relacionados con el trabajo o la educación. Las políticas también deben establecer límites claros para el uso de la red, incluyendo el uso de dispositivos personales y la descarga de software.
          <br>
          2.-Implementar controles de acceso: Es importante implementar controles de acceso para limitar el acceso a la red solo a aquellos que tienen una necesidad legítima de acceder a ella. Esto puede incluir la implementación de contraseñas seguras, la autenticación de dos factores y la asignación de permisos de acceso específicos a cada usuario.
          <br>
          3.-Realizar auditorías y monitoreo de la red: Es importante realizar auditorías y monitoreo de la red para detectar posibles amenazas y vulnerabilidades. Esto puede incluir la implementación de herramientas de monitoreo de red y la realización de auditorías de seguridad.
          <br>
          4.-Capacitar al personal: Es importante capacitar a todo el personal de la organización en medidas de seguridad básicas, como contraseñas seguras y la detección de correos electrónicos de phishing.
          <br>
          5.-Implementar medidas de seguridad adicionales: Es importante implementar medidas de seguridad adicionales para proteger la red y la información confidencial. Esto puede incluir la implementación de firewalls, la encriptación de datos y la autenticación de dos factores.`;
          break;

        case 10:
          suggestions[
            i
          ].innerHTML = `Sugerencia 11: 1.-Instalar un firewall: Un firewall es una herramienta esencial para proteger la red de amenazas externas, como ataques de hackers o virus informáticos. Es importante instalar un firewall en la red para limitar el acceso no autorizado a la red.
          <br>
          2.-Instalar un antivirus: Un antivirus es una herramienta esencial para detectar y eliminar virus informáticos. Es importante instalar un antivirus en la red para proteger los dispositivos conectados a la red y evitar la propagación de virus.
          <br>
          3.-Realizar actualizaciones y parches de seguridad: Es importante realizar actualizaciones y parches de seguridad de forma regular en todos los dispositivos conectados a la red. Esto puede ayudar a cerrar posibles vulnerabilidades y evitar que los hackers aprovechen las brechas de seguridad.
          <br>
          4.-Establecer contraseñas seguras: Es importante establecer contraseñas seguras en todos los dispositivos conectados a la red, incluyendo routers y servidores. Las contraseñas deben ser únicas y no deben compartirse entre dispositivos.
          <br>
          5.-Implementar políticas claras de uso de la red: Es importante implementar políticas claras de uso de la red que limiten el acceso a sitios web y aplicaciones no relacionados con el trabajo o la educación. Las políticas también deben establecer límites claros para el uso de la red, incluyendo el uso de dispositivos personales y la descarga de software.
          <br>
          6.-Realizar auditorías y monitoreo de la red: Es importante realizar auditorías y monitoreo de la red para detectar posibles amenazas y vulnerabilidades. Esto puede incluir la implementación de herramientas de monitoreo de red y la realización de auditorías de seguridad.`;
          break;

        case 11:
          suggestions[i].innerHTML = `Sugerencia 12: 1.-Realizar un inventario de los componentes del SITE: se debe tener una lista actualizada de los equipos y dispositivos del sitio, para poder identificar cuáles necesitan mantenimiento.
          <br>
          2.-Priorizar los componentes críticos: se deben identificar los componentes más importantes del sitio y darles prioridad en cuanto al mantenimiento.
          <br>
          3.-Establecer un plan de mantenimiento: se debe establecer un plan de mantenimiento para cada componente, el cual debe incluir una frecuencia de mantenimiento adecuada.
          <br>
          4.-Asignar responsabilidades: se deben asignar responsabilidades específicas para cada tarea de mantenimiento, asegurándose de que sean realizadas por personas capacitadas y con experiencia.
          <br>
          5.-Realizar el mantenimiento: se debe realizar el mantenimiento siguiendo el plan establecido, asegurándose de que se cumplan todas las medidas de seguridad necesarias.
          <br>
          6.-Realizar pruebas de funcionamiento: se deben realizar pruebas de funcionamiento después de cada mantenimiento para verificar que todo esté funcionando correctamente.
          <br>
          7.-Documentar el mantenimiento: se debe documentar todo el mantenimiento realizado en el sitio, para tener un registro histórico y poder identificar patrones de fallas o problemas recurrentes.`;
          break;

        default:
          break;
      }
    }
  }
}

for (let i = 0; i < cosas.length; i++) {
  cosas[i].addEventListener("click", function () {
    checkAll();
  });
}

checkAll();
