class Persona:
    def __init__(self, id_persona, nombre, apellido, email):
        self.id_persona = id_persona
        self.nombre = nombre
        self.apellido = apellido
        self.email = email

    def __str__(self):
        return f'''
            Id Persona: {self.id_persona},
            Nombre: {self.nombre},
            Apellido: {self.apellido},
            Email: {self.email},
        '''
    
##Metodos Getters and Setters


@property
def id_persona(self):
    return self.id_persona


@id_persona.setter
def id_persona(self, id_persona):
    self.id_persona = id_persona

