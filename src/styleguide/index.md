# The Grid
---

## Estructura básica

```html
<section class="section">
  <div class="container">
    <div class="row">
      <div class="col">      
      </div>
    </div>
  </div>
</section>
```

<div class="row row-xs-1 center-xs ">
  <div class="col-xs-8">
    ![Basic](assets/images/styleguide/structure-basic.png)
  </div>
</div>



## Grid

```html_example
<section class="section">
  <div class="container">
    <div class="row row-xs-3 row-sm-3 row-md-3 row-lg-3">
      <div class="col-xs-10 col-sm-7 col-md-2 col-lg-4 bg-primary pd-10"></div>
      <div class="col-xs-1 col-sm-3 col-md-8 col-lg-5 bg-primary pd-10"></div>
      <div class="col-xs-1 col-sm-2 col-md-2 col-lg-3 bg-primary pd-10"></div>           
    </div>
  </div>
</section>
```



# Buttons

---

## Button Primary 

```html_example
<a href="#" class="button button--primary button--xlarge mg-right-30">Xlarge button</a>
<a href="#" class="button button--primary button--large mg-right-30">Large button</a>
<a href="#" class="button button--primary mg-right-30">Normal button</a>
<a href="#" class="button button--primary button--small mg-right-30">Small button</a>
<a href="#" class="button button--primary button--tiny">Tiny button</a>
```

---

## Button Secondary 


```html_example
<a href="#" class="button button--secondary button--xlarge mg-right-30">Xlarge button</a>
<a href="#" class="button button--secondary button--large mg-right-30">Large button</a>
<a href="#" class="button button--secondary mg-right-30">Normal button</a>
<a href="#" class="button button--secondary button--small mg-right-30">Small button</a>
<a href="#" class="button button--secondary button--tiny">Tiny button</a>
```

---

## Button Link

```html_example
<a href="#" class="button button--link button--xlarge mg-right-30">Xlarge button</a>
<a href="#" class="button button--link button--large mg-right-30">Large button</a>
<a href="#" class="button button--link mg-right-30">Normal button</a>
<a href="#" class="button button--link button--small mg-right-30">Small button</a>
<a href="#" class="button button--link button--tiny">Tiny button</a>
```



# Colors

---

<div class="row row-xs-4">
  <div class="col-xs-3">
    <div class="color-block">
      <span class="bg-primary pd-10"></span>
      Primary #007ABC
    </div>
  </div>

  <div class="col-xs-3">
    <div class="color-block">
      <span class="bg-primary-accent"></span>
      Primary accent #0061A0
    </div>
  </div>

  <div class="col-xs-3">
    <div class="color-block">
      <span class="bg-secondary Secondary"></span>
      Secondary #A4CE4E
    </div>
  </div>

  <div class="col-xs-3">
    <div class="color-block">
      <span class="bg-secondary-accent Secondary accent"></span>
      Secondary accent #7A9816
    </div>
  </div>
</div>



# Typography

---

## Headings

<p>font-family: "Georgia", sans-serif;</p>
<p>font-weight: bold;</p>

---

## Paragraphs

<p>font-family: "Arial", sans-serif;</p>

---

<h1>Heading Level 1</h1>

{ font-size: 48px; }

<h2>Heading Level 2</h2>

{ font-size: 32px; }

<h3>Heading Level 3</h3>

{ font-size: 28px; }

<h4>Heading Level 4</h4>

{ font-size: 24px; }

<h5>Heading Level 5</h5>

{ font-size: 18px; }

<h6>Heading Level 6</h6>

{ font-size: 16px; }



# Sombras

```html_example
  <div class="row row-xs-1 row-sm-5 center-xs">
    <div class="col-xs-12 col-sm-2 z-depth-1">
      <p>z-depth-1</p>
    </div>

    <div class="col-xs-12 col-sm-2 z-depth-2">
      <p>z-depth-2</p>
    </div>

    <div class="col-xs-12 col-sm-2 z-depth-3">
      <p>z-depth-3</p>
    </div>

    <div class="col-xs-12 col-sm-2 z-depth-4">
      <p>z-depth-4</p>
    </div>
    
    <div class="col-xs-12 col-sm-2 z-depth-5">
      <p>z-depth-5</p>
    </div>
  </div>

```

