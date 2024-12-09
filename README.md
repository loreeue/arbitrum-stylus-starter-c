# 📚 NALANDA

## 🚀 ¿Qué es NALANDA?
**NALANDA** es una plataforma revolucionaria inspirada en las antiguas bibliotecas que actuaban como centros de formación y conocimiento para médicos, psicólogos, historiadores y administradores. Este proyecto busca ser el archivo definitivo del conocimiento acumulado durante siglos, utilizando **blockchain**, **inteligencia artificial (IA)** y el **sistema IPFS** con la API de **Pinata.cloud**, para garantizar que la información sea accesible, inmutable y siempre actualizada.

---

## 🛠️ Funcionalidades principales

### 1. **Almacén descentralizado de libros**
- Los libros y sus metadatos se almacenan en **IPFS** a través de la API de **Pinata.cloud**, asegurando un almacenamiento eficiente, escalable y permanente.
- Cada libro es referenciado en la blockchain mediante un hash único generado en IPFS.
- Se implementará un sistema de validación distribuida para garantizar la autenticidad de los libros antes de su incorporación.

### 2. **Actualización dinámica de la biblioteca**
- La blockchain actúa como un índice para los archivos almacenados en IPFS, lo que permite actualizaciones constantes y evita duplicación o corrupción de datos.
- Cada nodo de la red mantiene una referencia válida a los archivos, eliminando puntos únicos de falla.

### 3. **IA para enseñanza personalizada**
- La IA integrada utiliza los datos almacenados en IPFS para:
  - **Explicar conocimientos complejos** en formatos modernos (podcasts, chats interactivos, resúmenes).
  - **Optimizar la enseñanza** adaptándose al estilo de aprendizaje del usuario.
  - Proporcionar **asesoría especializada** en áreas específicas con información siempre actualizada.

### 4. **Conocimiento accesible y permanente**
- El uso de IPFS con **Pinata.cloud** garantiza:
  - **Accesibilidad global:** Los libros son accesibles desde cualquier lugar con conexión a Internet.
  - **Reducción de costos:** Al aprovechar un sistema descentralizado, el costo de almacenamiento se minimiza en comparación con soluciones centralizadas.
  - **Resiliencia:** Los datos permanecen seguros incluso en caso de ataques o caídas de nodos.

---

## 🌐 Visión del proyecto

**NALANDA** no solo es un repositorio de libros. Es un ecosistema donde:
- **Las personas se forman y se convierten en expertos** en diversas áreas.
- **El conocimiento se almacena permanentemente**, siendo accesible para generaciones futuras.
- La IA mejora continuamente sus capacidades al recibir información verídica y actualizada.
- Se utiliza la **blockchain y IPFS** para garantizar la transparencia y la seguridad de la información.

---

## 💻 Desarrollo del Backend

El backend maneja la lógica para almacenar y recuperar libros en la blockchain y en **IPFS**. Este servicio permite:
1. Subir libros al sistema IPFS a través de la API de **Pinata.cloud** y obtener un **hash CID** único.
2. Guardar el hash CID en un contrato inteligente en la blockchain (Ethereum/Arbitrum) como una URL.
3. Proveer una **API REST** para interactuar con estos datos, permitiendo a los usuarios subir libros, consultar los libros disponibles y recuperar sus metadatos.

### Principales tecnologías:
- **Node.js** con **Express** para manejar solicitudes y lógica del backend.
- **Pinata SDK** para subir libros a IPFS.
- **Ethers.js** para interactuar con contratos inteligentes en la blockchain.

---

## 💻 Desarrollo del Frontend

El frontend proporciona una interfaz gráfica moderna y fácil de usar para interactuar con los datos almacenados en la blockchain e IPFS. Sus funcionalidades incluyen:
1. Consultar los libros disponibles desde la blockchain.
2. Mostrar la información de cada libro en un formato visualmente atractivo.
3. Permitir que los usuarios descarguen los libros directamente desde IPFS.

### Principales tecnologías:
- **React** con **Next.js** para una experiencia fluida y responsiva.
- **Tailwind CSS** para un diseño moderno y estético.
- **Wagmi.js** y **ethers.js** para conectarse con la blockchain y manejar transacciones.

---

## 📋 Cómo desplegar la web

1. Clonar el repositorio:

```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
```
2. Actualizar submódulos del repositorio:

```bash
   git submodule update --init --recursive
```
3. Instalar cargo-stylus:

```bash
   cargo install cargo-stylus
```
4. Agregar el objetivo para compilar en WebAssembly:

```bash
   rustup target add wasm32-unknown-unknown
```
5. Crear el archivo .env en el directorio raíz con el siguiente contenido:
```
PRIVATE_KEY=0x<TU_CLAVE_PRIVADA>
PINATA_API_KEY=<TU_API_KEY_PINATA>
PINATA_SECRET_API_KEY=<TU_API_SECRET_PINATA>
RPC_URL=<URL_RPC_DE_ETHEREUM>
CONTRACT_ADDRESS=<DIRECCION_DEL_CONTRATO_INTELIGENTE>
```

6. Cambiar la clave privada en el paso 5 del Makefile.
7. Compilar y desplegar:

```bash
   make re
   cargo stylus check --wasm-file ./contract.wasm -e https://sepolia-rollup.arbitrum.io/rpc
   cargo stylus deploy --wasm-file ./contract.wasm -e https://sepolia-rollup.arbitrum.io/rpc --cargo-stylus-version 0.5.3 --private-key 0x<TU_CLAVE_PRIVADA>
```
8. Actualizar las direcciones del contrato en index.ts y page.tsx.
9. Instalar las dependencias del frontend:

```bash
   npm install wagmi @wagmi/core ethers
   npm install
```
10. Instalar las dependencias de Pinata:
```bash
   npm install ipfs-http-client @pinata/sdk
```

11. Ejecutar el frontend:

```bash
    make frontend
```
12. Abrir la web en el navegador: [http://localhost:3000/](http://localhost:3000/).

---

## 📞 Contacto
Si tienes dudas, sugerencias o quieres contribuir, no dudes en contactarnos:
- **GitHub Loreto:** [github.com/loreeue](https://github.com/loreeue)
- **GitHub Cristian:** [github.com/CristianYepes](https://github.com/CristianYepes)

---
