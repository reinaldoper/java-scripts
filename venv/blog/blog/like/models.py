from django.db import models

class Mercado(models.Model):
    titulo = models.TextField()
    ITENS_CHOICES = (
        ("F", "Frango"),
        ("M", "Maionese"),
        ("C", "Carne"),
        ("T", "Tomate"),
        ("A", "Arroz"),
        ("FE", "Feijão"),
        ("FR", "Frios"),
        ("B", "Bebidas"),
        ("N", "Nenhuma das opções")
    )
    itens = models.CharField(max_length=5, choices=ITENS_CHOICES, blank=False, null=False)
    datacompra = models.DateTimeField(auto_now_add=True)
    data = models.DateTimeField(auto_now=True)

    
    def __str__(self):
        return self.titulo

class Cliente(models.Model):
    SEXO_CHOICES = (
        ("F", "Feminino"),
        ("M", "Masculino"),
        ("N", "Nenhuma das opções")
    )

    nome = models.CharField(max_length=100, null=False, blank=False)
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, blank=False, null=False)
    data_nascimento = models.DateField(null=False, blank=False)
    email = models.EmailField(null=False, blank=False)


    def __str__(self):
        return self.nome


# Create your models here.
