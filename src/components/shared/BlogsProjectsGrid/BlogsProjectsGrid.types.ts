export interface GridItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface BlogsProjectsGridProps {
  items: GridItem[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemClick: (id: number) => void;
}