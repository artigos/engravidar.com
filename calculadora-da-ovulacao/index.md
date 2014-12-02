---
layout: default
title: Calculadora da Ovulação
---

#{{ page.title }}

A nossa calculadora a ajudará a engravidar.

###Qual a data do primeiro dia da sua última menstruação?

<p>Data: <input type="text" id="datepicker"></p>

###Número de dias do seu ciclo

Se sabe que o seu ciclo é mais curto ou longo do que 28 dias, por favor selecione o número de dias abaixo.

<form action="#">
 
  <fieldset>
    <select name="number" id="number">
      <option>20</option>
      <option>21</option>
      <option>22</option>
      <option>23</option>
      <option>24</option>
      <option>25</option>
      <option>26</option>
      <option>27</option>
      <option selected="selected">28</option>
      <option>29</option>
      <option>30</option>
      <option>31</option>
      <option>32</option>
      <option>33</option>
      <option>34</option>
      <option>35</option>
      <option>36</option>
      <option>37</option>
      <option>38</option>
      <option>39</option>
      <option>40</option>
    </select>
  </fieldset>
 
</form>

<input type="submit" value="Calcular">

<span id="ovulation-calculator"></span>