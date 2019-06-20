# jupiter

Suposiciones para resolución del problema

1) Coger las dimensiones del primer input como las dimensiones del plano (2d)
2) Luego el segundo input ya me indicaba la orientación inicial y los valores en x e y del robot
3) La secuencia de comandos me permitían cambiar de orientacion y aplicar el movimiento el cual incrementaba el valor en los ejes positivos y los negativo tomaba como referencia los limites del plano en este caso las dimensiones with y height del primer input y voy restando valores en la posición correspondiente

En general el problema tiene dos formas de ejecución la primera ejecutando los tests y la segunda a través de la linea de comandos

En general, la estructura planteado ha sido crear unas clases tanto para la entidad principal que es el robot, como para el plano, las coordenadas y la linea de comandos. Adicional esto para gestionar la orientación he creado un objeto a manera de modulo para separar lo que es el tratamiento de los datos que se tienen de la orientación

Los test los he realizado con Jest, he aplicado TDD para el desarrollo de cada uno de ellos, y los casos de usos que sobre los que he realizado el test han sido los que me he encontrado en cada fase de lo que iba construyendo.

Los pasos para ejecutar el programa son los siguientes:

Version de node (10.13.0)


1) Yarn (para instalar las dependencias)
2) Yarn test (para ejecutar los tests, los scenarios de los ejemplos de la prueba estan al final de todo los casos de uso del fichero robot.js dentro del folder __tests__ )
3) Yarn start (para ejecutar en la linea de comandos, mostrará las preguntas por consola)
4) Please enter your plane dimensions: 55 (ingresar los datos de esta forma porque no se han validado los datos por separado)
5) Please introduce the coordinates: 1 2 N (he tomado en cuenta los espacios, se deberán ingresar los datos de esa forma)
6) Please introduce the sequence: IAIAIAIAA (el string se debe ingresar de esa forma evitando algun espacio)

Todos estos son los pasos a seguir para ver el funcionamiento del programa, ciertamente siempre hay cosas por mejorar o refactorizar igualmente estare atento a los comentarios
