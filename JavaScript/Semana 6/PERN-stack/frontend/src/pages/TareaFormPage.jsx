import {Card, Input, Textarea,Label} from ".../components/ui"
import { Label } from "../components/ui"

function TareaFormPage() {
  return (
    <div>
      <Card>
        <h2>Formulario de Tareas</h2>
        <form>
          <Label htmlFor="titulo"><Titulo></Titulo></Label>
          <Input type= "text" placeholder "Titulo"/>

          <Label htmlFor="descripción">Descripción</Label>
          <Textarea type= "text" placeholder "Descrepción"/>
        </form>
      </Card>
    </div>
  )
}

export default TareaFormPage