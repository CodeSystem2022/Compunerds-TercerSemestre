resultado=None
a=10
b=2
try:
    resultado=a/b #modificamos
except TypeError as e:
    print(f'Type Error-Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError-Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception-Ocurrio un error: {type(e)}')

print(f'El resultado es: {resultado}')
print('seguimos...')