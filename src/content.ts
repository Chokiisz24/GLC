import type { TelemetryStat, TimelineItem, GalleryItem, NavItem } from './types';

import gallery01 from './assets/images/gallery-01.jpg';
import gallery02 from './assets/images/gallery-02.jpg';
import gallery03 from './assets/images/gallery-03.jpg';
import gallery04 from './assets/images/gallery-04.jpg';
import gallery05 from './assets/images/gallery-05.jpg';
import gallery06 from './assets/images/gallery-06.jpg';
import gallery07 from './assets/images/gallery-07.jpg';
import gallery08 from './assets/images/gallery-08.jpg';
import gallery09 from './assets/images/gallery-09.jpg';
import gallery10 from './assets/images/gallery-10.jpg';

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Club', href: '#club' },
  { label: 'Rodadas', href: '#rodadas' },
  { label: 'Galería', href: '#galeria' },
];

export const telemetryStats: TelemetryStat[] = [
  { value: '04', label: 'Años rodando' },
  { value: 'GDL', label: 'Base de operaciones' },
  { value: '100', accent: '%', label: 'Lancer, sin excepción' },
  { value: '01', label: 'Club, una familia' },
];

export const timelineItems: TimelineItem[] = [
  {
    date: 'Fecha por definir',
    title: 'Encuentro GLC',
    description:
      'Punto de reunión fijo en Guadalajara para convivir, revisar autos y organizar la siguiente rodada.',
    status: 'Por definir',
  },
];

export const galleryItems: GalleryItem[] = [
  { src: gallery01, alt: 'Lancer azul y Lancer gris en camino de terracería entre pinos', size: 'tall' },
  { src: gallery02, alt: 'Fila de Lancer modificados estacionados en la calle', size: 'tall' },
  { src: gallery03, alt: 'Detalle de rin trasero de un Lancer', size: 'normal' },
  { src: gallery04, alt: 'Frente de un Lancer naranja bajo la lluvia', size: 'normal' },
  { src: gallery05, alt: 'Frente de un Lancer Evolution blanco con las luces encendidas', size: 'tall' },
  { src: gallery06, alt: 'Lancer azul en un estacionamiento techado de noche', size: 'normal' },
  { src: gallery07, alt: 'Tres Lancer con luces neón de noche en la calle', size: 'wide' },
  { src: gallery08, alt: 'Convoy de Lancer y otros autos rodando en carretera', size: 'normal' },
  { src: gallery09, alt: 'Lancer gris de perfil al atardecer con vista de la ciudad', size: 'tall' },
  { src: gallery10, alt: 'Lancer widebody gris estacionado en la calle', size: 'normal' },
];

export const joinSteps: string[] = [
  'Escríbenos por Instagram contándonos de tu Lancer.',
  'Te invitamos al siguiente encuentro mensual para conocerte.',
  'Entras al grupo del club y a la agenda de rodadas.',
];