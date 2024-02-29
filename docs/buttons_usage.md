### Uso del boton STANDAR
> El boton recibe como prop las siguientes props.

```js
ButtonStandar({ children, className, onClick })
```
### children
- Representaria todo lo que estaria adentro del boton.
### className
- Si al boton se le desea aplicar estilos propios puede usarse esta prop para darle dichos estilos.
### onCLick
- Se utilizaria para darle la funcionalidad de onClick al boton.
## Estructura del BotonStandar
```html
    <div
      className={`cursor-pointer rounded-lg h-10 grow-1 flex justify-center items-center text-white font-semibold  hover:scale-[1.03] transition border border-white/40 select-none
        ${className ? className : "bg-amber-500 hover:bg-amber-400"}`}
      onClick={onClick}
    >
      <div className="m-5">{children}</div>
    </div>
```
### Uso del Boton
> Para cambiar el Color del boton se le debe aplicar manualmente como se muestra en el ejemplo.
```js
     <ButtonStandar onClick={switchTheme} className={"bg-green-500 hover:bg-green-600"}>
         GO {state.opposite}
    </ButtonStandar>
```