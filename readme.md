### Contenido
- [Monorepo](#monorepo)
- [Requisitos de Desarrollo](#requisitos-de-desarrollo)
- [Comandos](#comandos)
- [TODO General](#todo-general)
- [Requisitos del Software](/docs/requisitos.md)
- [Tecnologías a usar](/docs/tecnologias.md)
- [Excalidraw N°0](https://excalidraw.com/#room=84e65bdb1577a535bb30,xWDpxkdJ0b9A-yiQH3D1zQ)

### Repositorios de este monorepo 
- [Frontend](/frontend/readme.md)
- [Backend](/backend/readme.md)

### Requisitos de Desarrollo
- Usar Yarn como manejador de paquetes. Para instalarlo:
```bash
$ npm install --global yarn
```
- Una vez instalado Yarn, instalar las dependencias del proyecto ejecutando:
```bash
$ yarn install
```

### Comandos
- Para iniciar modo desarrollo del frontend:
```bash
$ yarn run dev:frontend
```
- Para iniciar modo desarrollo del backend:
```bash
$ yarn run dev:backend
```
- Para iniciar modo desarrollo de ambos:
```bash
$ yarn run dev:both
```
Más en el archivo `package.json'.

### TODO General
- [ ] Componentes
    - [ ] Para ingreso de información 
        - [x] TextInput
        - [x] PasswordInput
        - [x] CurrencyInput
        - [x] Textarea
        - [x] DateTimePicker
        - [x] DatePicker
        - [x] TimePicker
        - [ ] DragAndDropFileBox
        - [ ] RadioInputList
        - [ ] CheckboxInputList
    - [ ] Para interacción
        - [x] Button
        - [x] Switcher
        - [x] ThemeSwitchButton
        - [ ] Dimmer / Intensity Regulator (?)
    - [ ] Para presentación de información
        - [ ] (Notification / Toast) Card
        - [ ] Product Card
        - [ ] Contact Card
        - [ ] ToolTip
        - [ ] Keybinding / KeyboardAction (?)
- [ ] Utilidades
    - [ ] Notification Toaster
    - [ ] Keybindings (?)
