<?php namespace product;
  /**
   * Cores individuais para os produtos conforme cadastro no SETAERP (Linx Seta Digital)
   */
  class Color{
  /**
   * Código das cor cadastradas
   * - !!! Esse não é um código Hexadecimal!!!
   */
    public $cod;
    /**
   * Nome da cor conforme cadastrado
   */
    public $color_name;
     /**
   * Código Hexadecimal (Gerado automáticamente)
   */
    public $hex_code;
     /**
   * Código Hexadecimal (Gerado automáticamente)
   */

    public function __construct(string $cod, string $color_name, string $hex_code){
      $this->cod = $cod;
      $this->color_name = $color_name; 
      $this->hex_code = $hex_code; 

    } 

    public function getColor(){
      return $this->__toString();
    }

    public function __toString(){
      return "" . $this->cod . " - " . $this->color_name; 
    }
    public function getRed():int{
      $rgb = $this->getRGB();
      return (int)$rgb[0];
    }
    public function getGreen():int{
      $rgb = $this->getRGB();
      return (int)$rgb[1];
    }
    public function getBlue():int{
      $rgb = $this->getRGB();
      return (int)$rgb[2];
    }

    public function getRGB():array{
      list($r, $g, $b) = sscanf($this->hex_code, '%2x%2x%2x');
      return [$r, $g, $b];
    }
    
  }

  $test = new Color("000038", "BRANCO", "FFFFFF");
  echo $test; 
  $outroTest = $test->getBlue();
  echo $outroTest;