new Vue({
    el: '#app',
    data: {
        activeTab: 'calificaciones',
        nota1: null,
        nota2: null,
        nota3: null,
        asistencia: null,
        resultado: '',
        nombre: '',
        correo: '',
        contrasena: '',
        repetirContrasena: ''
    },
    methods: {
        calcularCalificaciones() {
            const notas = [this.nota1, this.nota2, this.nota3];
            const asistencia = this.asistencia;

            // Validaciones
            if (notas.some(nota => nota < 10 || nota > 70) || asistencia < 0 || asistencia > 100) {
                this.resultado = 'Por favor, verifica que las notas y la asistencia estén dentro de los rangos permitidos.';
                return;
            }

            const promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
            if (promedio >= 40 && asistencia >= 80) {
                this.resultado = `Promedio: ${promedio.toFixed(2)} - Aprobado`;
            } else {
                this.resultado = `Promedio: ${promedio.toFixed(2)} - Reprobado`;
            }
        },
        registrarUsuario() {
            if (this.nombre && this.correo && this.contrasena && this.repetirContrasena) {
                if (this.contrasena === this.repetirContrasena) {
                    alert('El registro se ha realizado correctamente');
                } else {
                    alert('Las contraseñas no coinciden');
                }
            } else {
                alert('Por favor, completa todos los campos.');
            }
        }
    }
});