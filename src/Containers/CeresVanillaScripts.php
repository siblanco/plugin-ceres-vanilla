<?php

namespace CeresVanilla\Containers;

use Plenty\Plugin\Templates\Twig;

class CeresVanillaContainer2
{
    public function call(Twig $twig):string
    {
        return $twig->render('CeresVanilla::Script');
    }
}