<?php namespace product;
require_once('./product/colors.php');

/**
     * PRODUCTS CLASS
     * Todas as informações referentes aos produtos da loja
    */
  class Product{

    /**
     * CÓDIGO
    */
    private string $cod; 
    /**
     * NOME ou DESCRIÇÃO
    */
    private string $name = ""; 
    /**
     * CORES
    */
    private array $colors = []; 
    /**
     * MARCA
    */
    private string $brand; 
    /**
     * FORNECEDOR
    */
    private $provider; 
     /**
     * DEPARTAMENTO
    */
    private $department; 
    
    /**
     * GRUPO
    */
    private $group; 
    /**
     * SUBGRUPO
    */
    private $subgroup;
    /**
     * GRADE
    */
    private $grade;
    /**
     * COLEÇÃO
    */
    private $colection;

    /**
     * MARKUP
    */
    private $markup;
    /**
     * CUSTO BRUTO
    */
    private $raw_price; 


    public function getCod(){
      return $this->cod;
    } 
    
    public function getName(){
      return $this->name;
    } 

    public function setName(string $name){
      $this->name = $name;
    } 

    public function __toString(){
      return json_encode(__CLASS__);
    }


  }

  
?>