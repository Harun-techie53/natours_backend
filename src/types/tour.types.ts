import { Tour } from "@prisma/client";

export const Difficulty = ['EASY', 'MEDIUM', 'DIFFICULT'] as const;

export interface TourDto {
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: typeof Difficulty[number];
  price: number;
  image_cover?: string;
  start_date: string;
}

export interface ITour {
  id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: typeof Difficulty[number];
  price: number;
  image_cover?: string;
  start_date: string;
  created_at?: Date;
  updated_at?: Date;
  tour_locations?: any;
}

export type PrismaTourModel = Tour;
