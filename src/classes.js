/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new Programmer({fullName:'pepe', 'Java'});
 * newProgrammer.getInfo();
 *
 * @see https://www.estapaginanoexiste.com
 *
 * @todo Implementar el resto de métodos
 * @tutorial first-tutorial
 *
 */

class Programmer {
  /**
   * @param {{fullName:String}} user User's information
   * @param {String} language A programming language
   *
   */
  constructor(user, language) {
    this.fullName = user.fullName; //!no existe pero solo ejemplo
    this.language = language;
  }

  /**
   * Get Programmer information
   * @returns {void}
   */

  getInfo() {
    console.log(
      `soy ${this.fullName} y mi lenguaje favorito es ${this.language}`
    );
  }
}

/**
 * know more in {@link Programmer}
 */

const programmerOne = new Programmer({ fullName: 'peter' }, 'javascript');
const programmerTwo = new Programmer({ fullName: 'pepedro' }, 'python');

programmerOne.getInfo();
