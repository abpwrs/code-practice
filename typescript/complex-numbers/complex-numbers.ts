class ComplexNumber {
  private m_real: number;
  private m_imag: number;
  constructor(real: number, complex: number) {
    this.m_real = real;
    this.m_imag = complex;
  }

  real() {
    return this.m_real;
  }

  imag() {
    return this.m_imag;
  }

  // e^(a + i * b) = e^a * e^(i * b)
  // e^(i * b) = cos(b) + i * sin(b)
  exp() {
    return new ComplexNumber(5,5);
  }

  //
  abs() {
    return new ComplexNumber(5,5);
  }

  //
  conj() {
    return new ComplexNumber(5,5);
  }

  // ( a + i * b) + (c + i * d) = (a + c) + (b + d) * i
  add(c_num: ComplexNumber) {
    this.m_real += c_num.real();
    this.m_imag += c_num.imag();
  }

  // (a + i * b) - (c + i * d) = (a - c) + (b - d) * i
  sub(c_num: ComplexNumber) {
    this.m_real -= c_num.real();
    this.m_imag -= c_num.imag();
  }

  // (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i
  mul(c_num: ComplexNumber) {
    this.m_real = this.m_real * c_num.m_real - this.m_imag * c_num.m_imag;
    this.m_imag = this.m_imag * c_num.m_real - this.m_real * c_num.m_imag;
  }

  // (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i
  div(c_num: ComplexNumber) {
    this.m_real =
      (this.m_real * c_num.m_real + this.m_imag * c_num.m_imag) /
      (Math.pow(c_num.m_real, 2) + Math.pow(c_num.m_imag, 2));
    this.m_imag =
      (this.m_imag * c_num.m_real - this.m_real * c_num.m_imag) /
      (Math.pow(c_num.m_real, 2) + Math.pow(c_num.m_imag, 2));
  }
}

export default ComplexNumber;
